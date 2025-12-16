// Typescript types: Inference & Annotations

// ***Inference :***
// ex:
let username = "Hello";
// username = 0980;  // Here it shows error because the typescript automatic detect the username isn't the string data type which i declared at first line

username = "World"; //Here it detect the the value is in string type thats why no error showing

// ***Annotations :***
// ex:

let hero: string = "Spiderman" // Here, I annotate at first. That the value is going to be in string data type

//hero = false;  // Here, it shows error because i am assigning the different data type value which is boolean

let isLoggedIn: boolean = true;

// isLoggedIn = "true";





