// Напишіть функцію, яка приймає рядок як параметр і перетворює
// першу букву кожного слова рядка в верхній регістр.

function upperCase(str) {
    return str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
}
console.log(upperCase('i love java script'));
