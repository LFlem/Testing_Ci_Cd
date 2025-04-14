interface Product {
  readonly id: number;
  name: string;
  price?: number;
}

interface User {
  readonly id: number;
  name: string;
  age: number;
  isActive: boolean;
  products: Product[];
}

const username: string = "John Doe";
const userId: number = 1;
const age: number = 30;
const isActive: boolean = true;

const user: User = {
  id: userId,
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
