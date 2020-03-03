//Falsy => false, 0, "", '', undefined, NaN, null

//Truthy => "0", [], {}, 12345

let age = 0;

if(age || age==0){
    console.log("Statement is true");
}
else{
    console.log("Statement is false");
}