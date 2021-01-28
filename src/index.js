const person = { name: "John" };
const updated = Object.assign({}, person, { name: "Bob", age: 30 } );
console.log(updated);