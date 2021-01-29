const person = {
    name: "John",
    address: {
        country: "United States",
        city: "Boston"
    }
};

const updated = { ...person, name: "Bob" };
console.log(updated);