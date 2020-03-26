function calcRectangleArea(width, height) {

    try {
        if (Number.isInteger(+width) && Number.isInteger(+height)) {
            return width * height;
        } else {
            throw new Error('Incorrect Data');
        }
    } catch (error) {
        console.log('Please enter the correct data');
    }
};

console.log(calcRectangleArea(5, 10));
console.log(calcRectangleArea("5", "10"));
console.log(calcRectangleArea(5, 'aaaa'));

