//  OOPS concept in TS

class Coffee {
    name: string;
    price: number;


    constructor (name:string, price: number){
        this.name = name
        this.price = price

        console.log(this); // latte 
    }
}

const latte = new Coffee("Mocha", 50);

latte.name = "Latte"
console.log(latte) // Output: Coffee { name: 'Latte', price: 50 }


// ********Access Modifier TS: **********

// Public and Private example:

class coffeeIng {
    public name: string = "Latte"; // public can be access from anywhere
    private secretIngredients: string = "Milk" // private can be access only inside the class

    reveal(){
        return this.secretIngredients; // ok
    }
}

const coffee1 = new coffeeIng();

console.log(coffee1.reveal) // ok
console.log(coffee1.name) // ok
//console.log(coffee1.secretIngredients) // error


// Protected example

class coffeeShop {
    protected shopName: string = "Cafe Corner" // protected can be access inside the class and also in
}

class Branch extends coffeeShop {
    getShopName(){
        return this.shopName //ok
    }
}

const shop = new coffeeShop();
//console.log(shop.shopName); // error

const branch = new Branch().getShopName();
console.log(branch);

// Private example:

class Wallet {
    #balance: number; // private field

    getBalance (){
        return this.#balance;
    }
}

const wallet = new Wallet()

//console.log(wallet.#balance); // error
console.log(wallet.getBalance()); // ok


// readonly example:

class Cup {
    readonly capacity: number = 250;

    constructor (capacity: number) {
        this.capacity = capacity; // ok  // The given Capacity cannot be changed
    }
};

// Controlled gates (Getter-Setter)

class SugarLevel {
    private _sugar:number = 2 //by default 2

    get sugar(){
        return this._sugar;
    }

    set sugar(value: number){
        if (value > 5) throw new Error("Too Sweet..")
            this._sugar = value;
    }
}

const levels = new SugarLevel()

levels.sugar = 3; // ok
console.log(levels.sugar) // Output: 3 


// ******Static Member example:*********

class OneCoffee {
    static shopName = "Coffee Cafe"

    constructor(public flavour:string){}
}

console.log(OneCoffee.shopName);


// ******Abstract Class*******
// In some cases we don't want class result in object (Mostly use in Mobile Development)

abstract class Drink{
    abstract make(): void
}

class MyCoffee extends Drink {
    make(){
        console.log("Making Coffee...");
    }
}

// Composition example :

class Heater {
    heatElement(){}
}

class coffeeMaker {
    constructor(private heater: Heater){}

    make(){
        this.heater.heatElement();
    }
}
