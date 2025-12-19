// Objects in Typescript

const coffee = {
    type: 'Arabica',
    price: 10,
    isHot: true
}

// In TS this always Infer (takes as true statement)

// {
//     name: string,
//     age: number,
//     isStudent: boolean
// }


// Declaring Object Types

let tea = {
    type: 'Green Tea',
    price: 25,
    isHot: false
}

tea = {
    type: 'Black Tea',
    price: 30,
    isHot: true
} // After adding all keys with values the error will gone.


// Type - Alias Objects

type Tea = {
    name: string,
    price: number,
    ingredients: string[]
}

let myTea: Tea = {
    name: 'Ginger Tea',
    price: 15,
    ingredients: ["ginger", "tea leaves", "milk", "water",]
}

// Duck Typing

// example
type Cup = { size: string }

let smallCup: Cup = { size: '200ml' }

let bigCup = { size: "500ml", material: "steel" }

smallCup = bigCup // Duck Typing works here as size key is present in both objects.

// one more example
type Brew = { brewTime: number }

const coffeeBrew: Brew = { brewTime: 5, beans: "Arabica" }
const teaBrew: Brew = coffeeBrew

// Usage Checking

type User = {
    username: string,
    password: string
}

const user1: User = {
    username: "hello",
    password: "123"
}

// Data Type Split Out

type Item = { name: string, price: number }
type Address = { street: string, city: string, pin: number }

type Order = {
    id: string;
    items: Item[];
    address: Address
};


// ****interesting**** - 

// **Partial** -

// example 1:
type NewCoffee = {
    name: string,
    price: number,
    isHot: boolean
};

const changesInCoffee = (change: Partial<NewCoffee>) => {
    console.log(`some changes in coffee: ${change}`)
};

changesInCoffee({ price: 120 });
changesInCoffee({ isHot: true });
changesInCoffee({}) // 

// **Required** -
// example

type ChaiOrder = {
    name: string,
    quantity: number,
    totalPrice: number
}

const placeOrder = (order: Required<ChaiOrder>) => { // By using required all properties are must for this function
    console.log("Order Detail:", order)
}

placeOrder({
    name: "Latte",
    quantity: 1,
    totalPrice: 50
});

// **Pick** -

type AnotherCoffee = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
};

type BasicCoffeeInfo = Pick<AnotherCoffee, "name" | "ingredients">

const CoffeeInfo: BasicCoffeeInfo = {
    name: "Mocha",
    ingredients: ["coffee", "water"]
}

// **Omit** -

type CoffeeNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string
}


type PublicCoffee = Omit<CoffeeNew, "secretIngredients">; // Here omitted key won't visible to other or change
