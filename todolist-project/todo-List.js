const ul = document.getElementById("task-list");
const addBtn = document.getElementById("add-button");
const inputBox = document.getElementById("input-box");




function todoItem(listItem){
    this.completed = false
    this.listItems = listItem;
    
}

function todoList(){
    this.list = [];

}

todoList.prototype.addItem = function add(item) {
    this.list.push(item);
    this.render() 
}

todoList.prototype.render = function() {
    ul.innerHTML = "";
    this.list.forEach( (item) => {
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        const deleteBtn = document.createElement("button");
        const img = document.createElement("img");
        const div = document.createElement("div");
        div.className = "control";
        div.appendChild(checkbox);
        div.appendChild(deleteBtn);

        checkbox.className = "check";

        deleteBtn.className = "delete";
        img.className = "deleteImg";
        
        img.src = "d.jpg";
        
        
        deleteBtn.appendChild(img);

        

        deleteBtn.addEventListener('click', ()=>{
            this.list.splice(this.list.indexOf(item), 1);
            this.render();
        })

        checkbox.type = "checkbox";
        
        checkbox.checked = item.completed;
        checkbox.addEventListener('change' , ()=>{
            item.completed = checkbox.checked;
        })
        li.textContent = item.listItems;
       
        ul.appendChild(li);
        li.appendChild(div);
       



        
       
        
    })
}
const   TodoList = new todoList();
addBtn.addEventListener('click', function() {
    const listItem = new todoItem(inputBox.value);
    
    TodoList.addItem(listItem);

   
    inputBox.value = "";
   
    
})

