let array = [2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

let sum2 = 0;
let j = 0;
while (j < array.length) {
    sum2 += array[j];
    j++
}
console.log(sum, sum2);
