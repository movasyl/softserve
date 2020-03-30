function lastElem(arr, x) {

    return arr.slice(x > arr.length ? 0 : x ? x : arr.length - 1);
}

console.log(lastElem([3, 4, 10, -5]));      // -5
console.log(lastElem([3, 4, 10, -5], 2));   // [10, -5]
console.log(lastElem([3, 4, 10, -5], 8));   // [3, 4, 10, -5]