// • Union & Any types

// ***Union -*** 
// Example: 
let subs: string | number = "1M"

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

let airlinesSeat: "aisle" | "window" | "middle" = "aisle";

airlinesSeat = "aisle";

// ***Any -*** 
// Example:

const orders = ['2', '3', '4', '5', '6']

let currentOrder: string | undefined;

for (let order of orders) {
    if(order === '28'){
        currentOrder = order;
        break;
    }
    currentOrder = "11";
};

console.log(currentOrder);