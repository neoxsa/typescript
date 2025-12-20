// Web Request TS

//import axios, { AxiosResponse } from 'axios';  // Here axios is functionality and AxiosResponse is type. So to remove the squiggly line we import type separately.

import axios from 'axios';
import type { AxiosResponse } from 'axios'; // Importing only type from the axios module .d.ts file


// Sometimes we need Typescript support Dependency/Library then we use:
// npm i -D @types/some-library    // Recommended way
// In case some library does not have types, we can create our own type declaration file (.d.ts)


interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const response: AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

        console.log("Todo:", response.data);
    } catch (error: any) {
        // console.error(error.message);  // Here error is of type 'any', so we can access message property

        // Better error handling with type assertion (gives better suggestions for error object)
        if (axios.isAxiosError(error)) {
            console.error("Axios error message:", error.message);
        if (error.response) {
            console.error("Response data:", error.response.data);
        }
        }
    }
};