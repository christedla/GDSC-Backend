async function fetchtodo() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        
        if (!response.ok) {
            throw new Error(`http error! status: ${response.status}`);
        }

        const todo = await response.json();
        console.log(todo);
    } catch (error) {
        console.error('error fetching the todo item:', error);
    }
}

fetchtodo();