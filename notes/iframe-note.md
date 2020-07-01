---
title: 网页内嵌iframe的初始化处理
tags:
  - iframe
  - html
emoji: 👋
link: https://github.com/janeluck
---

##### 一、属性设置

```js
iframe.src = 'xxUrl';
iframe.frameBorder = '0';
iframe.hspace = '0';
iframe.sandbox = 'allow-scripts allow-same-origin allow-popups';
iframe.id = 'xxIframe';
```

##### 二、样式设定

iframe默认的宽度300px，高度150px。需要写样式控制其充满展示空间。

```css
.xiframe{
    width: 100%;
    height: 100%;
    margin: 0;
    border: 0;
    padding: 0;
}
```

##### 三、注意事项

父页面是https协议，只能嵌入https协议的iframe。
