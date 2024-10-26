console.log("Test ok");
{
    //it can be accesible outside the backet cause var is global
    var age = 22;
}
console.log(age);

{
    //it only accesible inside the backet cause let is local 
    let name = "Subhadip";
    console.log(name);

    name = "Nobady";
    console.log(name);
}


const dob = "18.01.2002";

console.log(dob)

//it will give you a error
// dob = "03.03.2002"











