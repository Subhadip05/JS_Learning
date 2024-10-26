const boys = ["Subhadip","Debjit","Avijit",1,"Suman","Tarun","Suvasish","Pritam","Khusal","Souvik","Akash","Faizal","Goutam"];

boys[3]= "Sayak"
// console.log(boys[3])
// console.log(boys.length)

// boys.push("Aranb")
// console.log(boys.indexOf("Goutam"));
// console.log(boys.indexOf("Sabikun"));

// console.log(boys)

//higher order funtion
// function print(name){
//     console.log("Name: " +name)
// }

// boys.forEach(print)


//Or you can write like this
// boys.forEach((val)=>console.log("Name: "+val));

// boys.map((val) => console.log("boys:- "+val))

//forEach doesn't return value but map can return new array
const nums = [1,2,3,4,5]

// function doubleValue(n){
//     return n*2;
// }

// let newArr1 = nums.forEach(doubleValue)

// let newArr2 = nums.map(doubleValue)

// console.log(newArr1)
// console.log(newArr2)


// console.log(nums.includes(4))

// let evenArr = nums.filter((num)=> num%2 == 0)
// console.log(evenArr)]

// let newArr3 = nums.slice(1,4); //type of substring
// console.log(newArr3)

let newArr4 = nums.slice(2,4);
console.log(newArr4)
console.log(nums)