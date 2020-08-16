function debounce(fn, delay) {
  let timer = null;
  return function() {
    const context = this;
    let args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args)
    }, delay)
  }
}


function throttle(fn, delay) {
  let start = Date.now();
  return function () {
    const context = this;
    const args = arguments;
    if (Date.now() - start >= delay) {
      fn.apply(context, args);
      start = Date.now();
    }
  }
}
