let a = +prompt('Enter the length of the side A of the triangle.');
let b = +prompt('Enter the length of the side B of the triangle.');
let c = +prompt('Enter the length of the side C of the triangle.');
let p;
let maxSide;
let minSide;
let middleSide;
let s;

if (a > 0 && b > 0 && c > 0) {
    p = (a + b + c);
    maxSide = Math.max(a, b, c);
    minSide = Math.min(a, b, c);
    middleSide = p - maxSide - minSide;

    Math.pow(maxSide, 2) == Math.pow(middleSide, 2) + Math.pow(minSide, 2) ?
        console.log('трикутник прямокутний')
        : console.log('трикутник не прямокутний');

    // формула Герона
    p = p / 2;
    s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    console.log('площа трикутника: ', s.toFixed(3));
} else {
    console.error('Incorrect data');
}