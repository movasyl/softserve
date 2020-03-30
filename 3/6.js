function findUnique(arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = 1; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                return false;
            };
        }
    } return true;
}

console.log(findUnique([1, 3, 2, 5, 11]));
console.log(findUnique([1, 3, 2, 5, 11, 1]));