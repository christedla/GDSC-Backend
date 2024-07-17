employee = [];

function addEmployee(name ,id , position , department) {
    employee.push({name : name , id : id , position : position , department : department});
    console.log("employee added")
    console.log(employee)
    
    console.log("enter 1 to go to menue or 0 to exit")
    const numChosen = parseInt(prompt("Enter your choice : "));
    if (numChosen == 1) {
        menu()
    }else{
        return
    }
}
function listEmployees() {
    employee.forEach((employee) => {
        console.log("name: " + employee.name + "id: " + employee.id + "position: " + employee.position  +"department: " + employee.department)
        
    });

    console.log("enter 1 to go to menue or 0 to exit")
    const numChosen = parseInt(prompt("Enter your choice : "));
    if (numChosen == 1) {
        menu()
    }else{
        return
    }

    
 
}
function findEmployee(id) {
    console.log(employee.find((employee) => employee.id == id))
    console.log("enter 1 to go to menue or 0 to exit")
    const numChosen = parseInt(prompt("Enter your choice : "));
    if (numChosen == 1) {
        menu()
    }else{
        return
    }
}
function updateEmployee(id , newname , newposition , newdepartment) {

    
   let index =  employee.findindex(check)
   function check(employee) {

    return employee.id == id
       
   }
   employee[index].name = newname
   employee[index].position = newposition
   employee[index].department = newdepartment
   console.log("employee updated")
   console.log(employee)
   
   console.log("enter 1 to go to menue or 0 to exit")
   const numChosen = parseInt(prompt("Enter your choice : "));
   if (numChosen == 1) {
       menu()
   }else{
       return
   }
        

}

function deleteEmployee(id) {
    employee.pop (employee.find((employee)=> {
        employee.id = id

    }))
    console.log("employee deleted")
    console.log(employee)
    
    console.log("enter 1 to go to menue or 0 to exit")
    const numChosen = parseInt(prompt("Enter your choice : "));
    if (numChosen == 1) {
        menu()
    }else{
        return
    }

}
function menu() {
    console.log("employee management system")
console.log("1. add employee");
console.log("2. list employee");
console.log("3. find employee");
console.log("4. update employee");
console.log("5. delete employee"); 
const numChosen = parseInt(prompt("Enter your choice : ")); 

if (numChosen == 1) {
    const name = prompt("Enter employee name : ");
    const id = prompt("Enter employee id : ");
    const position = prompt("Enter employee position : ");
    const department = prompt("Enter employee department : ");  

    addEmployee(name , id , position , department);
}else if (numChosen == 2) {
    listEmployees();
}else if (numChosen == 3) {
    const id = parseInt(prompt("Enter employee id : "));
    findEmployee(id);
}else if (numChosen == 4) {
    const id = parseInt(prompt("Enter employee id : "));
    const newname = prompt("Enter new name : ");
    const newposition = prompt("Enter new position : ");
    const newdepartment = prompt("Enter new department : ");
    updateEmployee(id , newname , newposition , newdepartment);
}else if (numChosen == 5) {
    const id = parseInt(prompt("Enter employee id : "));
    deleteEmployee(id);
}
    
}
menu();


 


