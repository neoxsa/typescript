// Interface: the advantage of using interface is they donot create extra javascript code, instead they defined the code structure

// example 1:
interface Coffee {
    name: string;
    price: number;
    milk?: boolean;
}

const serveCoffee: Coffee = {
    name: "Espresso",
    price: 50,
    milk: true
}


console.log(serveCoffee);

// example 2:

interface Shop {
    readonly id: number;
    name: string;
}

const shop: Shop = {
    id: 1,
    name: "Cafe Coffee Day"
}
//shop.id = 21 //error

//  ******Function Handling with interface******
// example 1:
interface DiscountCalculator {
    (price: number): number
}

const apply50: DiscountCalculator = (p) => {
    return p * 0.5
}

//example 2:

interface CoffeeMachine {
    start(): void;
    stop(): void;
}

const newMachine: CoffeeMachine = {
    start() {
        console.log("Starting...")
    },
    stop() {
        console.log("Stop")
    }
};

// ****Index Signature*****

interface CoffeeMenu {
    [name: string]: number
}

const menu: CoffeeMenu = {
    Latte: 20,
    Mocha: 15,
    Espresso: 10,
    Cappuccino: 25
}

// Merging two or more interface -  For Mixed library and System code

// 1. Method
interface Mug {
    material: string
}

interface Mug {
    capacity: number
}

const myMug: Mug = {
    material: "Melamine",
    capacity: 250
}

// 2. Method

interface A { a: string };
interface B { b: string };

interface C extends A,B {};

// 