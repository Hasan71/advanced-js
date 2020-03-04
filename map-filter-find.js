let numbers = [2,3,4,5,6,7,8,9,10];

// let arrayResult = [];

// for(let i=0; i<numbers.length; i++){

//     const double = numbers[i];

//     const result = double * double;

//     arrayResult.push(result);

// }

// console.log(arrayResult);

const square =  numbers.map(x => x * x);

console.log(square);



const anotherResult  = numbers.map(function(element){
    return element * element;
})

console.log(anotherResult);


const filterArray =  numbers.filter(x => x>5);

console.log(filterArray);


const findArray = numbers.find(y => y>5);
console.log(findArray);

