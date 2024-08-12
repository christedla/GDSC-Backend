async function fetchtodo() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        
        // Check if the res is ok (status code 200)
        if (!res.ok) {
            throw new Error(`http error! status: ${res.status}`);
        }

        const todo = await res.json();
        console.log(todo);
    } catch (error) {
        console.error('error fetching the to-do item:', error);
    }
}

fetchtodo();
