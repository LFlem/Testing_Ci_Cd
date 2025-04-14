interface Product {
  readonly id: number;
  name: string;
  price?: number;
}

interface User {
  name: string;
  age: number;
  isActive: boolean;
  products: Product[];
}

const username: string = "John Doe";
const age: number = 30;
const isActive: boolean = true;
const user: User = {
  name: username,
  age: age,
  isActive: isActive,
  products: [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
  ],
};

const getUsername = (user: User): string => {
  return user.name;
};

console.log(getUsername(user));
