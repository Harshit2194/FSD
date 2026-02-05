function myFunction(){
    console.log("Starting a task...");
    let sum = 0;
    for (let i =0;i<100000000;i++){
        sum +=i;

    }
    console.log("Task finsished");
    return sum ;

}
console.log ("Before the funciton call ");
let result = myFunction();
console.log("After the fucntion call");
console.log("Result :", result);