// Types and Response

// create custom type for 2 or more functions instead of repeating in every function
type coffeeCup = {
    type: string,
    sugar: number,
    milk: boolean
}

function makeCoffee(order: coffeeCup) {
    console.log(`Making ${order.type} coffee with ${order.sugar} sugar and ${order.milk ? 'milk' : 'no milk'}.`)
}

function serveCoffee(order: coffeeCup) {
    console.log(`Serving ${order.type} coffee with ${order.sugar} sugar and ${order.milk ? 'milk' : 'no milk'}.`)
}

// **Interface**


type CoffeeRecipe = {
    coffee: string,
    sugar: number,
    milk: boolean,
    water: boolean
}

class Cappuccino implements CoffeeRecipe { // Here it works with both type and interface
    coffee = "Cappuccino"
    sugar = 2
    milk = true
    water = true
};

//Custom type Example: 

// type CupSize = 'small' | 'medium' | 'large' //custom types


interface CupSize {
    size: 'small' | 'medium' | 'large'
}


class coffee implements CupSize {
    size: "small" | "medium" | "large" = "small"
}

// Type Limitation : Example

type Response = {ok:false}| {ok:true}

class myRes implements Response {
    ok: boolean = true
};


// Types - Literal Type -  Example

type CoffeeType = 'Cappuccino' | 'Latte' | 'Espresso'

function isCoffeeType(type: CoffeeType){
    console.log(`This is a ${type} coffee.`)
}

// Types - Intersection (&) Example

type MakeCoffee = {
    coffee: number,
    milk: boolean
}

type AddSugar = {
    sugar: number
}

type CoffeeOrder = MakeCoffee & AddSugar  // Here use intersection to add the both type in a new type CoffeeOrder

const cup: CoffeeOrder = {
    coffee: 1,
    milk: true,
    sugar: 2
}

// Values - Optional

type User = {
    username: string,
    bio?: string // Here use ? to make the bio optional
}

const user1: User = { username : "John"}
const user2: User = {username: "Neo", bio: "I am the one."}

// Values - Readonly

type Config = {
    readonly appName: string,
    version: string   
}

const cfg: Config = {
    appName: "My App",
    version: "1.0.0"
}

// cfg.appName = "New App" // This will give an error because appName is readonly
cfg.version = "1.1.0" // This will not give an error because version is not readonly
