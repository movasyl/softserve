function testThrow(ex) {
    try {
        throw new Error(ex);
    } catch (err) {
        console.log(err);

    }
}

testThrow(5);
testThrow('Test');
testThrow(new Error('An error happened'));