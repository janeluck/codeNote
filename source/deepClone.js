/*
* 对象的深拷贝
* @param {Object} source
* @return {Object}
* */
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


function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}


function deepClone1(source) {
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
  while (loopList.length) {
    const node = loopList.shift();
    const parent = node.parent;
    const data = node.data;
    const key = node.key;
    let res = parent;
    if (typeof key !== 'undefined') {
      res = parent[key] = {}
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
    })


  }

  return root
}


function deepClone2(source) {
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


    const uniqueData = find(uniqueList, data);
    if (uniqueData) {
      parent[key] = uniqueData.target;
      break;
    } else {
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

const c = {bingo: 'awesome'}
console.log(deepClone2({
  name: 'jane',
  collect: {
    math: true,
    eng: true,
    computer: {
      network: true,
      algorithm: true
    }
  },
  sweet: c,
  janeajian: {
    status: c
  }
}));
console.log(deepClone0({
  name: 'jane',
  collect: {
    math: true,
    eng: true,
    computer: {
      network: true,
      algorithm: true
    }
  },
  sweet: c,
  janeajian: {
    status: c
  }
}));

const a = {age: 11};
a.b = a;
console.log(deepClone2(a))
