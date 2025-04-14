"use strict";
let user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isActive: true,
    role: "admin",
    createdAt: new Date(),
    products: [
        {
            id: 1,
            name: "Product 1",
            price: 20,
        },
        {
            id: 1,
            name: "Product 1",
        },
    ],
};
const fullName = (user) => {
    return `${user.firstName} ${user.lastName}`;
};
const fullNameBis = (fistName, lastName) => {
    console.log(`${fistName} ${lastName}`);
};
// const Index = ({lastName, firstName}:IProps) => {
//     return (
//         <div>
//         <p>{ lastName } {firstName} </p>
//         </div>
//     )
// }
