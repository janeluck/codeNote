---
title: sort排序
tags:
  - javascript
  - algorithm
emoji: 👋
link: https://janeluck.github.io/codeNote/sort
---

>找出数组中最小的k个数。以任意顺序返回这k个数均可

排序
 + O(N*N)冒泡、插入、选择
 + O(NlogN)快排、归并
 + todo 堆排序

```js
/*
*设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
示例：
输入： arr = [1,3,5,7,2,4,6,8], k = 4
输出： [1,2,3,4]
提示：
0 <= len(arr) <= 100000
0 <= k <= min(100000, len(arr))
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/smallest-k-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
* */

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const smallestK = function (arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr.slice(0, k);
};
console.log(smallestK([1, 3, 5, 7, 2, 4, 6, 8], 4));

// 冒泡法， 每轮挑选未排序的最大数，放到数组末尾。增加标识位提高效率
// 时间复杂度 o(N*N)

const bubble = function (arr, k) {
  for (let i = 0; i < arr.length; i++) {
    let change = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        const temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
        change = true;
      }
    }
    if (!change) return arr.slice(0, k);
  }
  return arr.slice(0, k);
};

console.log(bubble([1, 3, 5, 7, 2, 4, 6, 8], 4));

// 插入  依次取数组中的元素 插入已有的有序列，初始有序列为数组的第一个元素
// O(N*N)

const insert = function (arr, k) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr.slice(0, k);
};


console.log(insert([1, 3, 5, 7, 2, 4, 6, 8], 4));

// 选择  从坐标0开始，每次选取未排序中的最小数与当前坐标交换数字
// O(N*N)

const select = function (arr, k) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    const
      value = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    arr[i] = arr[minIndex];
    arr[minIndex] = value;
  }
  return arr.slice(0, k);
};


console.log(select([1, 3, 5, 7, 2, 4, 6, 8], 4));


// 快排法 挑选队列最后一个元素，从头到尾遍历，小于其的推入left数组，大于的推入right数组。直到数组元素<=1,返回left.concat(current).concat(right)
const quick = function (arr) {
  if (arr.length <= 1) return arr;
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] <= arr[arr.length - 1]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quick(left)
    .concat(arr[arr.length - 1])
    .concat(quick(right));
};

function smallestKQuick(arr, k) {
  return quick(arr)
    .slice(0, k);
}

console.log(smallestKQuick([1, 3, 5, 7, 2, 4, 6, 8], 4));

// 归并排序法
// 以中间位置分开为left、right数组，merge  left 和right，left和right也做mergeSort处理
// 需要mergeSort和merge两个方法，mergeSort的终止条件是arr的长度<=1
// merge是比较left、right的元素，直到某一个数组到最后，然后result concat 左右两数组剩余的元素（只有一个数组会剩下，但是方便写，就一起concat）


const merge = function (left, right) {
  let i = 0;
  let
    j = 0;
  const result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i += 1;
    } else {
      result.push(right[j]);
      j += 1;
    }
  }
  return result.concat(left.slice(i))
    .concat(right.slice(j));
};

const mergeSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const point = Math.floor(arr.length / 2);
  const left = arr.slice(0, point);
  const right = arr.slice(point);

  return merge(mergeSort(left), mergeSort(right));
};

function smallestKMerge(arr, k) {
  return mergeSort(arr)
    .slice(0, k);
}

console.log(smallestKMerge([1, 3, 5, 7, 2, 4, 6, 8], 4));

```
