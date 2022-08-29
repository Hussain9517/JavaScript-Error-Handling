// Make a function for the following formula. Use Error Handling also.
// X^2 + 5y


// myCalc Arrow Function

 myCalc = (x,y) => {

    // Using Error Handling

    try
    {
       // x^2 +5y Equation Formula
       
       let equation=Math.pow(x,2) + (5*y);
       console.log(equation);
    }

    catch(Error)
    {
        console.log(Error.message);
    }
}

// Calling the function myCalc

myCalc(2,3);  





// myCalc Arrow Function with return method

myCalc1 = (x,y) => {

    // Using Error Handling

    try
    {
       // x^2 +5y Equation Formula
       
       let equation1=Math.pow(x,2) + (5*y);
       return equation1;
    }

    catch(Error)
    {
        console.log(Error.message);
    }
}

// printing the value which is stored in my function

console.log(myCalc1(2,3));






