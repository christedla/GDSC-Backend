
let timer = document.getElementById("timer");
let input = document.getElementById("time");
let start = document.getElementById("btn");
let myInterval;
start.addEventListener("click", function (){

    try{
       
        let time = input.value;
        if (time <= 0){
            throw "time cannot be zero or negative"
            
        }

        myInterval = setInterval(function(){
            time--;
            timer.innerHTML = time;
            if(time == 0){
                clearInterval(myInterval);
                timer.innerHTML = "times up";
              
            }}, 1000)
    

    }
    catch(err){
        alert(err)
        timer.innerHTML = "time cannot be zero or negative"
    }
  
        
} )


