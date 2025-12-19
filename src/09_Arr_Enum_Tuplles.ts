// *******Arrays TS syntaxes:********

let fruits: string[] = ["Mango", "Banana", "Melon"]
let price: number[] = [100, 200, 300]
let mixed: (string | number)[] = ["Mango", 100, "Banana", 200, "Melon", 300]

let rating: Array<number> = [4.0, 5.0]


// Example 1:
type Coffee = {
    name: string,
    price: number
}

const menu: Coffee[] = [
    { name: "Latte", price: 20 },
    { name: "Espresso", price: 15 }
]

console.log(menu) // Output: [ { name: 'Latte', price: 20 }, { name: 'Espresso', price: 15 } ]


// Array readonly - Example: // Cannot modify properties

const cities: readonly string[] = ["Delhi", "Jaipur", "Haryana"]

// cities.push("Mumbai") // Here pushing the value cannot be add in the cities because of readonly

// Multi-Dimension Array - Example:

const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

// *******Tuples TS syntaxes:********


// example 1 :
let coffeeTuple: [string, number];

coffeeTuple = ["Latte", 30] // Valid
// coffeeTuple= [25 , "Espresso"] // Invalid - can't change in other format 

// example 2 :
let userInfo: [string, number, boolean?] // It can also accept optional values

userInfo = ["Neoxsa", 25]
userInfo = ["Leon", 28, false] 

// example 3 : Readonly Tuples
const location: readonly [string, number] = ["Delhi", 100];

// example 4 :  named Tuples

const person: [name:string, age: number] = ["Neoxsa", 25];

// *******Enums TS syntaxes:********
// In standard practice in enum keep the data types same (like: all should be in number or string and etc.)

// example 1:
enum CoffeeSize {
    SMALL,
    MEDIUM,
    LARGE
}

const coffee = CoffeeSize.MEDIUM;

// example 2:
enum Price {
    LATTE = 100,
    ESPRESSO, // 101   // Here it takes the value automatic if the value not defined in it.
    CAPPUCCINO // 102   // Thats why this practice is not recommended
}

// example 3:

enum CoffeeType {
    LATTE = "Latte",
    ESPRESSO = "Espresso",
    CAPPUCCINO = "Cappuccino"
}

function coffeeTypes(type: CoffeeType){
    console.log(`Here is your ${type} coffee.`)
}

coffeeTypes(CoffeeType.ESPRESSO); // Output: Here is your Espresso coffee.
// coffeeTypes("Mocha"); // Invalid

// example 4: Heterogenous enum -- Not Standard Practice

enum RandomEnum {
    ID = 10,
    NAME = "Neoxsa",
    STATUS = "Active"
}

// example 5 :  enum in Constant

const enum Sugar {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}

const sugarLevel = Sugar.HIGH

// example 6 : push in enum

let t: [string, number] = ["Mango", 20]

t.push("Melon", 30) // Valid
console.log(t) // Output: [ 'Mango', 20, 'Melon', 30 ]

