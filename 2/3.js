let arr = new Array();

arr.push(88);
arr.push('lalala');
arr.push(true);
arr.push(null);

console.log(arr.length);

arr.push(prompt('Enter a number'));
console.log(arr[5]);
arr.shift();
console.log(arr);