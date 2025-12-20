// Web Request TS
import axios, { AxiosResponse } from 'axios';

// Sometimes we need Typescript support Dependency/Library then we use:
// npm i -D @types/some-library
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