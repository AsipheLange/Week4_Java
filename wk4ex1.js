function multiply(a,b,c){
    if (a===b || b==c || a===c){
        return "Numbers must be the same.";
    }
    return(a*b*c);
}
console.log(multiply(2,4,5));
console.log(multiply(2,4,4)) ;


const converToSEconds = function(minutes){
    return "The minutes converted to seconds is" +" " + minutes*60 + " " + "seconds.";
};
console.log(converToSEconds(10)) ;

function fahrenheitToCelsius(fahrenheit){
    return ((fahrenheit - 32)*5/9 + " "+"degrees celsius.")
}
console.log(fahrenheitToCelsius(68));

function reversingString(str){
    let reversed= " ";
    for (let i = str.length -1; i>=0;i--){
        reversed += str[i];
    }
    return reversed;
}
console.log(reversingString("I love my mom"));


function countVowels(str){
    let vowels ="aeiouAEIOU";
    let count = 0;

    for(let i =0; i<str.length; i++){
    if(vowels.indexOf(str[i])!==-1){
        count ++;
    }
    }
    return count;

}
console.log(countVowels("Counting the number of Vowels"));

function isPrime(number){
    if (number <=1) return false;

    for (let i = 2; i < number; i++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(1));
console.log(isPrime(20));
console.log(isPrime(75));
