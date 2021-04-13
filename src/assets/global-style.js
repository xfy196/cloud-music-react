const extendClick = () => {
  return `
    position: relative;
    &:before{
      content: '';
      position: absolute;
      top: -.1rem; bottom: -.1rem; left: -.1rem; right: -.1rem;
    };
  `;
};

const noWrap = () => {
  return `
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  `;
};

const bgFull = () => {
  return `
    background-position: 50%;
    background-size: contain;
    background-repeat: no-repeat;
  `
};

export default {
  "theme-color": "var(--THEME)",
  "theme-color-shadow": "rgba(212, 68, 57, .5)",
  "font-color-light": "#f1f1f1",
  "font-color-light-shadow": "rgba(241, 241, 241, 0.6)",//略淡
  "font-color-desc": "#2E3030",
  "font-color-desc-v2": "#bba8a8", //略淡
  "font-size-ss": ".1rem",
  "font-size-s": ".12rem",
  "font-size-m": ".14rem",
  "font-size-l": ".16rem",
  "font-size-ll": ".18rem",
  "border-color": "#e4e4e4",
  "border-color-v2": "rgba(228, 228, 228, 0.1)",
  "background-color": "#f2f3f4",
  "background-color-shadow": "rgba(0, 0, 0, 0.3)",
  "highlight-background-color": "#fff",
  "official-red": "#E82001",
  extendClick,
  noWrap,
  bgFull
};
