"use strict";
const username = "John Doe";
const age = 30;
const isActive = true;
// const hobbies: string[] = ["reading", "gaming", "hiking"];
const user = {
    name: username,
    age: age,
    isActive: isActive,
    products: [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Smartphone", price: 800 },
    ],
};
const getUsername = (user) => {
    return user.name;
};
console.log(getUsername(user));
