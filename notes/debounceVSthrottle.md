---
title: 防抖(debounce)和节流(throttle)
tags:
  - javascript
emoji: 👋
link: https://github.com/janeluck
---

> 超简版防抖和节流

防抖：窗口滚动等行为最后只执行一次

```js
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
```


节流：一段时间内只执行一次，设定的时间段内只执行一次

```js
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
```
