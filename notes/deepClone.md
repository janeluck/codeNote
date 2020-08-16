---
title: deepClone深拷贝
tags:
  - javascript
emoji: 👋
link: https://janeluck.github.io/codeNote/deepClone
---

手写对象的深拷贝
 + 入参类型判断
 + 递归导致的爆栈，使用循环解决
 + 循环引用，保留引用关系解决

```js
/*
* 对象的深拷贝
* @param {Object} source
* @return {Object}
* */
function deepClone(source) {
  // 判断入参是否为对象
  if (!isObject(source)) return source;

  const root = {};
  const loopList = [
    {
      parent: root,
      data: source,
      key: undefined
    }
  ];
  // 保留相同引用的关系，从而破解循环依赖
  const uniqueList = [];

  while (loopList.length) {
    const node = loopList.shift();
    const parent = node.parent;
    const data = node.data;
    const key = node.key;
    let res = parent;
    if (typeof key !== 'undefined') {
      res = parent[key] = {}
    }


    // 先判断是否已存在
    const uniqueData = find(uniqueList, data);
    if (uniqueData) {
      parent[key] = uniqueData.target;
      break;
    } else {
      // 保留源数据和当前拷贝过的数据引用
      uniqueList.push({
        source: data,
        target: res
      })
    }

    Object.keys(data).forEach(function (item) {
      if (isObject(data[item])) {
        loopList.push({
          parent: res,
          data: data[item],
          key: item
        })
      } else {
        res[item] = data[item]
      }
    });


  }

  return root
}

function find(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].source === item) {
      return arr[i]
    }
  }
}


function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}
```


递归导致的爆栈问题
```
function deepClone0(source) {
  // 判断入参是否为对象
  if (!isObject(source)) return source;

  const result = {}
  Object.keys(source).forEach(function (item) {
    if (isObject(source[item])) {
      result[item] = deepClone0(source[item]);
    } else {
      result[item] = source[item]
    }
  })
  return result
}
```
