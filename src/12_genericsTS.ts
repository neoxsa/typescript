// Generics => you can declared with any Alphabet
// Usage : API Response, Form state (React), etc

// It also support pick, partial and omit

// example 1:
function wrapInArray<T>(item: T): T[] {
    return [item]
}

wrapInArray("Hello World"); // can take string
wrapInArray(42); // can take number
wrapInArray({ name: "Alice", age: 30 }); // can take object

//example 2:

function pair<A, B>(a: A, b: B): [A, B] {
    // return [b, a] // Invalid format
    return [a, b] // Valid format
};

pair("Latte", 42);
pair("Latte", false);
pair("Latte", { flavour: "vanilla" });

// generic interface

// ex 1:
interface Box<T> {
    content: T
}

const numberBox: Box<number> = {content: 12}
const stringBox: Box<string> = {content: "Coffee"}

// ex 2:
interface ApiPromise<T> {
    status: number;
    data: T
}

const res : ApiPromise<{flavour: string}> = {
    status: 200,
    data: {flavour: "Mango"}
}
