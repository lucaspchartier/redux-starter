const add = a => {
    return b => {
        return a + b
    };
};

const addAgain = a => b => a + b; // (a, b) => a + b

add(1)(5); // add(1, 5)
// N => 1