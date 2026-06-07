/* iOS-style motion enhancements: parallax, magnetic CTA, 3D card tilt.
   Pure DOM + CSS transitions keyed by the ios easing tokens in global.css —
   no animation library import, so first paint stays light. */

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

const isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

const init = () => {
  if (prefersReducedMotion) return;

  /* ───── Parallax on elements marked [data-parallax] ───── */
  const parallaxEls = document.querySelectorAll<HTMLElement>("[data-parallax]");
  if (parallaxEls.length > 0) {
    const items = Array.from(parallaxEls).map((el) => ({
      el,
      speed: parseFloat(el.dataset.parallax || "0.2"),
    }));
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      for (const { el, speed } of items) {
        el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      }
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
  }

  /* ───── 3D tilt on elements marked [data-tilt] ───── */
  if (isFinePointer) {
    const tiltEls = document.querySelectorAll<HTMLElement>("[data-tilt]");
    tiltEls.forEach((el) => {
      const maxTilt = parseFloat(el.dataset.tilt || "5");
      const setTilt = (rx: number, ry: number) => {
        el.style.transition = "transform 250ms cubic-bezier(0.16, 1, 0.3, 1)";
        el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      };
      let rafId = 0;
      let pendingX = 0;
      let pendingY = 0;
      const onMove = (e: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        pendingY = dx * maxTilt;
        pendingX = -dy * maxTilt;
        if (!rafId) {
          rafId = requestAnimationFrame(() => {
            setTilt(pendingX, pendingY);
            rafId = 0;
          });
        }
      };
      el.addEventListener("pointerenter", () => {
        el.style.transition = "transform 350ms cubic-bezier(0.16, 1, 0.3, 1)";
      });
      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerleave", () => {
        el.style.transition = "transform 600ms cubic-bezier(0.34, 1.56, 0.64, 1)";
        el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      });
    });
  }

  /* ───── Magnetic pull on elements marked [data-magnetic] ───── */
  if (isFinePointer) {
    const magneticEls = document.querySelectorAll<HTMLElement>("[data-magnetic]");
    magneticEls.forEach((el) => {
      const strength = parseFloat(el.dataset.magnetic || "0.3");
      const radius = parseFloat(el.dataset.magneticRadius || "120");
      let rafId = 0;
      let tx = 0;
      let ty = 0;
      let active = false;

      const apply = () => {
        if (active) {
          el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        } else {
          el.style.transform = "";
        }
        rafId = 0;
      };

      const schedule = () => {
        if (!rafId) rafId = requestAnimationFrame(apply);
      };

      const onMove = (e: PointerEvent) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < radius) {
          active = true;
          tx = dx * strength;
          ty = dy * strength;
          schedule();
        } else if (active) {
          active = false;
          tx = 0;
          ty = 0;
          schedule();
        }
      };

      el.style.transition = "transform 400ms cubic-bezier(0.16, 1, 0.3, 1)";
      window.addEventListener("pointermove", onMove, { passive: true });
      el.addEventListener("pointerleave", () => {
        if (active) {
          active = false;
          tx = 0;
          ty = 0;
          schedule();
        }
      });
    });
  }
};

/* Defer to idle so first paint isn't impacted */
if ("requestIdleCallback" in window) {
  (window as Window & { requestIdleCallback: (cb: () => void) => void })
    .requestIdleCallback(init);
} else {
  setTimeout(init, 200);
}
