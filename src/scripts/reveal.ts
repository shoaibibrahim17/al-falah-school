(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ───── Word-stagger reveal (for headlines/quotes) ───── */
  const wordTargets = document.querySelectorAll<HTMLElement>("[data-reveal-words]");
  wordTargets.forEach((el) => {
    const text = el.textContent ?? "";
    const words = text.split(/\s+/).filter(Boolean);
    el.textContent = "";
    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.className = "reveal-word";
      span.style.setProperty("--order", String(i));
      span.textContent = word;
      el.appendChild(span);
      if (i < words.length - 1) el.appendChild(document.createTextNode(" "));
    });
  });

  /* ───── Reveal-on-scroll system ───── */
  const revealElements = document.querySelectorAll(
    "[data-reveal], [data-reveal-group], [data-reveal-words]"
  );

  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    document
      .querySelectorAll<HTMLElement>(".reveal-word")
      .forEach((w) => w.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          if (target.dataset.revealGroup !== undefined) {
            Array.from(target.children).forEach((child, i) => {
              (child as HTMLElement).style.setProperty("--order", String(i));
            });
            target.classList.add("is-visible");
          } else if (target.dataset.revealWords !== undefined) {
            target.classList.add("is-visible");
            target
              .querySelectorAll<HTMLElement>(".reveal-word")
              .forEach((w) => w.classList.add("is-visible"));
          } else {
            target.classList.add("is-visible");
          }
          observer.unobserve(target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));
  }

  /* ───── Navbar scroll listener + scroll-to-top FAB ───── */
  const navbar = document.querySelector("[data-navbar]");
  const fab = document.querySelector<HTMLButtonElement>("[data-scroll-top]");
  if (navbar || fab) {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (navbar) navbar.toggleAttribute("data-scrolled", y > 40);
          if (fab) fab.toggleAttribute("data-visible", y > 600);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
  if (fab) {
    fab.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  /* ───── Active nav link indicator ───── */
  const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link[href^='#']");
  if (navLinks.length > 0) {
    const linkMap = new Map<string, HTMLAnchorElement[]>();
    navLinks.forEach((link) => {
      const id = link.getAttribute("href")?.slice(1);
      if (!id) return;
      const list = linkMap.get(id) ?? [];
      list.push(link);
      linkMap.set(id, list);
    });

    const sections = Array.from(linkMap.keys())
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length > 0) {
      const setActive = (id: string | null) => {
        navLinks.forEach((l) => l.removeAttribute("data-active"));
        if (!id) return;
        linkMap.get(id)?.forEach((l) => l.setAttribute("data-active", ""));
      };

      const sectionObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          if (visible[0]) setActive(visible[0].target.id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
      );
      sections.forEach((s) => sectionObserver.observe(s));
    }
  }
})();
