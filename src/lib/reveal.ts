export interface RevealOptions {
  selector: string;
  step?: number;
  mobileMargin?: string;
  desktopMargin?: string;
  onReveal?: () => void;
}

export function initReveal({
  selector,
  step = 150,
  mobileMargin = "0px 0px -250px 0px",
  desktopMargin = "0px 0px -320px 0px",
  onReveal,
}: RevealOptions): HTMLElement | null {
  const section = document.querySelector<HTMLElement>(selector);
  if (!section) return null;

  section
    .querySelectorAll<HTMLElement>(".reveal-item")
    .forEach((item, index) => {
      item.style.setProperty("--reveal-delay", `${index * step}ms`);
    });

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return;

      section.classList.add("is-visible");
      observer.disconnect();
      onReveal?.();
    },
    { rootMargin: isMobile ? mobileMargin : desktopMargin },
  );

  observer.observe(section);

  return section;
}
