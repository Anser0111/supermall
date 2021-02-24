export function debounce(func, delay) {
  // 刚到公司的时候，这种性能优化可以先不做。
  // 第一步完成需求，第二部才是性能优化。
  let timer = null;
  return function(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
