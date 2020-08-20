---
title: xss转义处理
tags:
  - javascript
  - security
emoji: 👋
---

xss转义处理

> 

```js
function htmlEncode (str) {
    return (str + '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39;')
        .replace(/"/g, '&quot;')
        // .replace(/ /g, '&nbsp;')
        .replace(/=/g, '&#61;')
        .replace(/`/g, '&#96;');
}
```
