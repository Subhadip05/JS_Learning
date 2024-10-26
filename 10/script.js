console.log("The outter function is Closure and inner function is working increment")

function makeCount(){
    let count = 1;

    function increment(){
        count++;
        console.log(count);
    }

    return increment;
}


let countNumber = makeCount();

countNumber();
countNumber();
countNumber();