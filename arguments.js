function add (num1, num2){

    console.log([...arguments]);

    var result = 0;

    for (let i=0; i<arguments.length; i++){
        const sum = arguments[i];
        var result = result + sum;
    }

    return result;
    
}

const summation = add(25, 15, 12, 17, 30, 34);

console.log("Sum of all argument is: " + summation);
