function randArray(k) {
    let arr = [];
    for (let i = 0; i < k; i++) {
        arr.push(Math.floor(Math.random() * Math.floor(500)))
    }
    console.log(arr);
}

randArray(10);