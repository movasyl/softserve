let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};


function propsCount(currentObject) {
    let count = 0;
    for (const key in currentObject) {
        if (currentObject.hasOwnProperty(key)) {
            count++
        }
    }
    return count;
}

console.log(propsCount(mentor));
