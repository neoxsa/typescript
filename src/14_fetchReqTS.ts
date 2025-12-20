// Fetch Ts :-
// In fetch we don't have built-in types like axios, so we define our own interfaces


interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Todo = await response.json();
        console.log("Todo:", data);
    } catch (error: any) {
        if (error instanceof Error) {
            console.error("Fetch error message:", error.message);
        }
    }
};

fetchData();
