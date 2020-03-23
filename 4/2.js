let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development"
};

function showProps(obj) {
    let prop = [];
    let val = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            prop.push(key);
            val.push(obj[key]);
        }
    }
    console.log(prop, val);
}

showProps(mentor);

