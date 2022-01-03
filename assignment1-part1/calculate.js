function getFactorial(){
    let data  = document.getElementById("number").value;
    let number = parseInt(data);
    calculateFactorial(number,display);
}
function calculateFactorial(number,display){
    let factorial = 1;
    if(isNaN(number))
        display("Invalid data type");
    else{    
        for(let i = 1;i<=number;i++)
            factorial*=i;
        display("factorial of given number is "+factorial);  
    }  
}
function display(text){
    document.getElementById("content").innerHTML = text;
}