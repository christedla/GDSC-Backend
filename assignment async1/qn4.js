 function fetchtodo() {
    return new Promise((resolve) => {

        const res =  fetch('https://jsonplaceholder.typicode.com/todos/1');
        //const todo =  res.json();
        resolve(res.json());
        

        
    })
 }
fetchtodo().then((todo) => {
    console.log(todo);
});
