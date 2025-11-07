function sum(n){
    if (typeof n !== "number" || n % 1 !== 0){
        return "The value passed is not a number.";
    }
    let total = 0;
    for (let i = 0; i<= n; i++){
        total += i;
    }
    return total;
}
console.log(sum(10));


function factorial(num){
    let result = 1;
    for(let i = num; i > 0; i--){
        result *= i;
    }
    return result;
}
console.log(factorial(4));

function funkyMath(...args){
    if (args.length ===2){
        return args[1] - args[0];
    } else if (args.length ===3){
        return args[0] + args[1]+ args[2];
    } else if(args.length ===4){
        let firstPart = args[0]+ args[1];
        let secondPart = args[2]+ args[3];
        return firstPart / secondPart;
    }else{
        return "invalid number of arguments";
    }
}

console.log(funkyMath(5,10));
console.log(funkyMath(1,2,3));
console.log(funkyMath(8,2,3,5));


let numbers = [1,2,33,45,6,44];
let oddNumbers= [];
for (let i = 0; i< numbers.length; i++){
    if (numbers[i] % 2!== 0){
        oddNumbers.push(numbers[i]);
    }
}
oddNumbers.sort((a,b)=> a - b);
console.log(oddNumbers);

let me ={
    firstName: "Asiphe",
    lastName: "Lange",
    age: 26,
    favouriteColour: "Blue",
    dreamCar: "It's not a bakkie, it's a HILUX!"
};
console.log(me);


me.favouriteFood = "Chicken Everyday ALL DAY!";

delete me.age;

console.log(me);
