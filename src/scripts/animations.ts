import { animate, inView, stagger, hover, scroll } from "motion";

(() => {
  /* ── 0. Scroll-aware Navbar ── */
  const navbar = document.querySelector("[data-navbar]");
  if (navbar) {
    scroll(({ y }) => {
      navbar.toggleAttribute("data-scrolled", y.current > 40);
    }, { axis: "y" });
  }

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (prefersReducedMotion) return;

  const canHover = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;

  const easeOut = "ease-out";

  /* ── 1. Hero Load Animation ── */
  const hero = document.querySelector("[data-hero]");
  if (hero) {
    const leftCol = hero.querySelector("[data-hero-left]");
    const rightCol = hero.querySelector("[data-hero-right]");

    if (leftCol) {
      const items = leftCol.children;
      animate(
        items,
        { opacity: [0, 1], transform: ["translateY(16px)", "translateY(0)"] },
        { duration: 0.4, easing: easeOut, delay: stagger(0.06) }
      );
    }

    if (rightCol) {
      animate(
        rightCol,
        {
          opacity: [0, 1],
          transform: ["scale(0.96)", "scale(1)"],
        },
        { duration: 0.4, easing: easeOut, delay: 0.2 }
      );
    }

    /* ── 2. Staggered Trust Badges ── */
    const badgeGroup = hero.querySelector("[data-stagger-group]");
    if (badgeGroup) {
      animate(
        badgeGroup.children,
        { opacity: [0, 1], transform: ["translateY(8px)", "translateY(0)"] },
        { duration: 0.25, easing: easeOut, delay: stagger(0.05) }
      );
    }
  }

  /* ── 3. Scroll-triggered Section Heading Reveal ── */
  const fadeUpElements = document.querySelectorAll('[data-animate="fade-up"]');
  fadeUpElements.forEach((el) => {
    inView(
      el,
      () => {
        animate(
          el,
          {
            opacity: [0, 1],
            transform: ["translateY(20px)", "translateY(0)"],
          },
          { duration: 0.45, easing: easeOut }
        );
      },
      { amount: 0.25 }
    );
  });

  /* ── 4. Scroll-triggered Card Stagger Reveal ── */
  const staggerGroups = document.querySelectorAll(
    "[data-stagger-group]:not([data-hero] [data-stagger-group])"
  );
  staggerGroups.forEach((group) => {
    inView(
      group,
      () => {
        animate(
          group.children,
          {
            opacity: [0, 1],
            transform: ["translateY(12px)", "translateY(0)"],
          },
          { duration: 0.35, easing: easeOut, delay: stagger(0.04) }
        );
      },
      { amount: 0.15 }
    );
  });

  /* ── 5/7. Desktop-only hover animations ── */
  if (canHover) {
    /* Card Hover Lift */
    document.querySelectorAll("[data-hover-card]").forEach((card) => {
      hover(card, () => {
        const enter = animate(
          card,
          { transform: "translateY(-3px)" },
          { duration: 0.2, easing: easeOut }
        );
        return () => {
          enter.stop();
          animate(
            card,
            { transform: "translateY(0)" },
            { duration: 0.15, easing: easeOut }
          );
        };
      });
    });

    /* Gallery Overlay */
    document.querySelectorAll("[data-gallery-card]").forEach((card) => {
      const overlay = card.querySelector(".gallery-hover-overlay");
      if (!overlay) return;
      hover(card, () => {
        const enter = animate(
          overlay,
          { opacity: 1 },
          { duration: 0.2, easing: easeOut }
        );
        return () => {
          enter.stop();
          animate(
            overlay,
            { opacity: 0 },
            { duration: 0.2, easing: easeOut }
          );
        };
      });
    });

    /* CTA Micro-interactions */
    document.querySelectorAll("[data-cta]").forEach((btn) => {
      hover(btn, () => {
        const enter = animate(
          btn,
          { transform: "translateY(-1.5px)" },
          { duration: 0.15, easing: easeOut }
        );
        return () => {
          enter.stop();
          animate(
            btn,
            { transform: "translateY(0)" },
            { duration: 0.15, easing: easeOut }
          );
        };
      });
    });
  }
})();
