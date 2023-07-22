/*let num1=parseInt(prompt("Enter the first number"));
let num2=parseInt(prompt("Enter the second number"));
let sum=num1+num2;
document.write(`The sum of two numbers is ${sum}`);*/

/*let a=12;
let b=2;
let c=a+b;
document.write(`Sum is ${c}`);*/

function sum(){
    if(arguments.length==0){
        console.log("No argument has passed");
    }
   
    else{
        let a=0;
        for(let i=0;i<arguments.length;i++){
        a=a+arguments[i];}
        console.log(a);
    }
    
}
sum(7,7);



