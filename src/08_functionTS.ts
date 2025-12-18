// Types Check in Function - Only Two types are check : one for Input & two for Output

// Input Check Example:

function makeCoffee(type: string, price: number) {
    console.log(`Making a ${type} coffee for ${price} rupees.`)
}

makeCoffee("Espresso", 100); // Valid
// makeCoffee("Espresso", "Rs.100.00"); // Invalid

// Output Check Example:

// Example 1:
function totalPrice(): number { // Here the output from the function is check
    //return "Rs.25" // Returning a string - Invalid
    return 25 // Returning number - Valid
};

// Example 2:
function takeOrder(order: string) {
    if (!order) return null
    return order;
}

// Example: // using void because here no need (return) for an output result
function logCoffee(): void {
    console.log("Logging coffee order");
}

logCoffee();


// Optonal Parameter - Example: 
function serveCoffee(name: string, price?: number) {
    console.log(`Here is your ${name} coffee, your bill is ${price || 0} rupees.`)
}

// Default Parameter - Example: 
function serveCoffee2(name: string, price: number = 0) {
    console.log(`Here is your ${name} coffee, your bill is ${price} rupees.`)
}

// Object Parameter- Example  
function makeCoffee3(order: {
    type: string;
    size: "small" | "medium" | "large";
}): object {
    return order;
}