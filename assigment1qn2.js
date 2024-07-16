
// finding gcf of 2 numberrs using for loop ASSIGNMENT 1 QN 2 
function gcf(a, b) {
    let gcf = 1
    for (let i = 1; i <= a && i <= b; i++) {

        if (a % i == 0 && b % i == 0) {
            gcf = i
     
        }
}
console.log(gcf)
}
const a = parseInt(prompt("Enter the first number: "));
const b = parseInt(prompt("Enter the second number: "));

gcf(a, b);
