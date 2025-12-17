//  • Type narrowing techniques

// Typeof narrowing example
function getCoffee(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind} coffee`;   // Here coffee is in string
    }
    else {
        return `Coffee order: ${kind}`;  //Here coffee is number
    };
}


// Truthy type narrowing example
function serveCoffee(msg?: string) {
    if (msg) {
        return `Serving ${msg}`
    }
    return `Serving default Mocha Coffee`;
}

// Ts Guardrail example
function orderCoffee(size: 'small' | 'medium' | 'large' | number) {
    if (size === 'small') {
        return `Small cup of coffee`;
    }
    if (size === 'medium' || 'large') {
        return `make extra Coffee`;
    }

    return `Coffee order #${size}`;
}

// ** Instanceof narrowing -**
// If both classes have same name method then how to get the specific method

class Latte {
    serve() {
        return `Serving Latte`
    };
}

class Espresso {
    serve() {
        return `Serving Espresso`
    };
}

function serve(coffee: Latte | Espresso) {
    if (coffee instanceof Latte) {
        return coffee.serve();

    }
};

// ** User-defined type narrowing -**

type coffeeOrder = {
    type: 'Latte' | 'Espresso';
    size: 'small' | 'medium' | 'large';
    sugar: number
}

function isCoffeeOrder(obj: any): obj is coffeeOrder {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        obj.type === 'string' &&
        obj.size === 'string' &&
        obj.sugar === 'number'
    )
};

function processOrder(item: coffeeOrder | string) {
    if (isCoffeeOrder(item)) {
        return `${item.size} cup of ${item.type} with ${item.sugar} sugar.`
    }
    return `#Order: ${item}`
}

// **Detailed User-Defined Type Narrowing -** 

type latte = { type: 'Latte'; milk: boolean };
type espresso = { type: 'Espresso'; shots: number };
type cappuccino = { type: 'Cappuccino'; foam: boolean };

type coffee = latte | espresso | cappuccino;

function prepareCoffee(order: coffee) {
    switch (order.type) {
        case 'Latte':
            return 'Ready to make Latte Coffee.'
            break;
        case 'Espresso':
            return 'Ready to make Espresso Coffee.'
            break;
        case 'Cappuccino':
            return 'Ready to make Cappuccino Coffee.'
            break;

        default: 'Ready to make Coffee'
            break;
    }
};

function brewCoffee(order: latte | espresso | cappuccino){
        if( 'milk' in order){
            return `Brewing Latte in a cup.`
        }
        if('shots' in order){
            return `Brewing Espresso in a cup.`
        }
        if('foam' in order){
            return `Brewing Cappuccino in a cup.`
        }
}

// Unknown example -

//function handleOrder(order: unknown): order is string[] { }