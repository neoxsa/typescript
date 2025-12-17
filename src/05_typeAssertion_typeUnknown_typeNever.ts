// Type - Assertion

// Example 1: 

let response: any = "42";

let numericLength: number = (response as string).length // Forceful Type Assertion

// Example 2: Assertion when get data from localStorage 

type Book = {
    title: string;
    author: string;
};
//
let bookString = '{"title":"Who Moved my Cheese"}'; // Suppose this bookString Store in localStorage(stores in string)

let bookObject = JSON.parse(bookString) as Book; // by using "as Book" we are asserting that the parsed object is of type Book

console.log(`Book Title: ${bookObject.title}`); // Book Title: Who Moved my Cheese

// Example 3: Assertion (Html Element)

const inputElement = document.querySelector(".username") as HTMLInputElement // 
inputElement.value = "Neoxsa";

// Type - Unknown

//Example: why use "unknown" over "any"

// any issue : (Can't Detect Error)
let value: any;

value = "Hello val1"
value = 42
value = true
value = [1, 2, 3]
value.toUpperCase() // Cannot access to toUpperCase() Here the typescript cannot detect the error because of "any" type


// unknown solution :
let value2: unknown;

value2 = "Hello val2"
value2 = 42
value2 = true
value2 = [1, 2, 3]
// value2.toUpperCase() // Error: Object is of type 'unknown'. 

if (value2 === 'string') {
    value2.toUpperCase();
}

// Example: try catch

try {

} catch (error) {
    // console.log(error.message)  // Property 'message' does not exist on type 'unknown'.
    if (error instanceof Error) {
        console.log(error.message)  // Now it's valid
    }
    console.log("Error: ", error)
}

// Example: Unknown Variable

const data: unknown = "Hello World";

const strData: string = data as string;


// Type - Never

// Example 1:
function throwError(message: string): never {
    throw new Error(message);
}

type Role = "admin" | "user";

function getRole(role: Role) {
    if (role === "admin") {
        console.log("Redirecting to Admin Dashboard.")
        return;
    }
    if (role === "user") {
        console.log("Redirecting to User Dashboard.")
        return;
    }
    role;  // On hover over role says never means it should not necessary to write or useless
}

// Example 2: Never Return Function 

function neverReturn():never{
    while(true){
        console.log("Infinity Loop") //  Infinity loop use in server to run continuously to send response according to user request 
    }
}