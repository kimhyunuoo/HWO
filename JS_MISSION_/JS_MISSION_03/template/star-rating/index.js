const containerClassName = "star-rating-container";
const cssTheme = "star-rating/theme.css";

const loadStyle = (href) => {
  if (!document.querySelector(`link[href="${href}"]`)) {
    const $link = document.createElement("link");
    $link.href = href;
    $link.rel = "stylesheet";
    document.head.insertBefore(
      $link,
      document.querySelector("link:last-of-type").nextElementSibling
    );
  }
};

const render = ($container) => {
  const { maxRating = 5 } = $container.dataset;
  if (maxRating === "0")
    throw new Error(`최소 1개 이상의 별점을 표시해 주세요`);

  $container.innerHTML = `<div class=${containerClassName}>${Array.from(
    { length: maxRating },
    (_, i) => `<i class="bx bxs-star" data-value="${i + 1}"></i>`
  ).join("")}</div>`;
};

const StarRating = ($container) => {
  loadStyle(cssTheme);
  render($container);

  const $stars = [...$container.querySelectorAll("i")];

  $container.onmouseover = ({ target }) => {
    if (target.matches("i")) {
      const { value } = target.dataset;
      $stars.forEach(($star, index) =>
        $star.classList.toggle("hovered", index < value)
      );
    }
  };
  // over / out 하나로 묶어 단일 할당
  $container.onmouseout = () =>
    $stars.forEach(($star) => $star.classList.remove("hovered"));

  $container.onclick = ({ target }) => {
    if (target.matches("i")) {
      const { value } = target.dataset;
      $stars.forEach(($star, i) =>
        $star.classList.toggle("selected", i < value)
      );
      $container.dispatchEvent(
        new CustomEvent("rating-change", { detail: value, bubbles: true })
      );
    }
  };
};

export default StarRating;
