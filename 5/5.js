function showUser(id) {
    try {
        if (id >= 0) {
            return { 'id': id };
        } else {
            throw new Error(`ID must not be negative: ${id}`);
        }

    } catch (err) {
        console.error(err.message);
        return false;
    }
};

function showUsers(ids) {
    let users = [];
    // ids.forEach(function (user, index) {
    //     // users.push(`{id:${user}}`);
    //     // users[index] = { id: user };
    //     if (showUser(user)) { users[index] = showUser(user) };
    // });
    for (let i = 0; i < ids.length; i++) {
        if (showUser(ids[i])) {
            users[i] = showUser(ids[i])
        };
    };
    return users.filter(element => element !== undefined);
}
console.log(showUsers([1, -7, 3, 5]));