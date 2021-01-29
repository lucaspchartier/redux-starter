const person = {
    name: "John",
    address: {
        country: "United States",
        city: "Boston"
    }
};

const updated = {
    ...person,
    address: {
        ...person.address,
        city: "Los Angeles"
    },
    name: "Bob"
};

person.address.city = "Los Angeles";
console.log(person);