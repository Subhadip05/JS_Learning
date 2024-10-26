//Function

//a,b--> parameters
let result=add(1,7)
console.log("Simple addition result: "+result)

function add(a,b){ //a,b--> argumaent
    // console.log(a+b);
    return a+b;
}



let sumResult = addMany(10,20,30);
console.log("Addition result using arguments: "+sumResult)

function addMany(){
    let sum = 0;

    for(let i =0;i<arguments.length;i++){
        sum+=arguments[i];
    }

    return sum;
}


let sumAll = addAll(50,100,150);
console.log("Addition result using spread operator: "+sumAll);

//spread operator
function addAll(...numbers){
    let sum = 0;

    for(let i =0;i<numbers.length;i++){
        sum+=numbers[i];
    }

    return sum;
}



const sayHello = () => {
    console.log("Hi,this is me : Arrow function")
}

sayHello();

//for only one statement
const multiply = (a,b) => a*b;

let mul = multiply(10,9)
console.log("Mulitply using one line arrow function: "+mul)



//You cann't use arrow function with argumants but with spread operator
const addOdd = (...oddNums) => {

    let sum = 0;
    for(let i =0;i<oddNums.length; i++){
        sum += oddNums[i];
    }
    return sum;
}

let oddSum = addOdd(1,3,5,7,9)
console.log("Sum of oDD numbers using spread operator = "+oddSum)





// Higher Order function and call back and cb is call back function
function printName(fName,lName,cb){
    let name = fName +" "+ lName;
    cb(name);

    //return function optional
    return () => console.log("Higher order function using help of call Back function");
}

let hFun = printName("No","Body",()=>{});
hFun();

printName("Subhadip","Samanta",function(value){
    console.log(value);
});

//upgrade with arrow function
printName("Ratan","Tata",(value)=>{
    console.log(value);
})



