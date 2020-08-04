---
title: webpack打包项目成为umd文件
tags:
  - webpack
  - module
emoji: 👋
link: https://github.com/janeluck
---

```js
// webpack.config
config = {
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "./dist"),
		libraryTarget: 'umd',
		libraryExport: 'default',
		library: 'Feedback',
		umdNamedDefine: true,
	}
}
```
