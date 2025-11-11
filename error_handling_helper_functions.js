function validateInput(input){
    try{
        if (input=== undefined || input === null){
            throw new Error("Input cannot be null or undefined.");
        }
        if(typeof input !== "dtring"){
            throw new TypeError("Input must be a string.");
        }
        if (input.trim()===""){
            throw new RangeError("Input cannot be an empty string.");
        }
        console.log("Valid input:", input);
    }catch(error) {
        console.error("Valiation Error:", error.message);{

        }
    }
}

function demonstrateErrors(value){
    try{
        console.log(nonExistentVar);

        value.toUpperCase();

        let arr = new Array(-1);
    }catch(error){
        console.error('${error.name}: ${error.message}');
    }finally{
        console.log("Error demonstration complete./n");
    }
}

const stringHelpers ={
    capitalize: str=> str.charAt(0).toUpperCase()+ str.slice(1),
    reverse: str=> str.split("").reverse().join(""),
    countWords: str=>str.trim().split(/\s+/).length
};

const arrayHelpers={
    sum: arr=> arr.reduce((acc,val)=> acc+val,0),
 average:arr=> arr.length? arr.reduce((acc,val)=> acc+val,0)/arr.length:0,
 max: arr=>Math.max(...arr),
  min:arr=>Math.min(...arr)
};

console.log("=== Input Validation ==");
validateInput("Hello to my world!");
validateInput(123);
validateInput(" ");
validateInput();

console.log("/n===String Helper Functions ==");
demonstrateErrors("test");

console.log("/n===String Helper Functions ==");
console.log("Capitalize:", stringHelpers.capitalize("hello"));
console.log("Reverse:", stringHelpers.reverse("hello"));
console.log("Word Count:", stringHelpers.countWords("JavaScript is stressful!"));

console.log("/n===Array Helper Functions ===");
const numbers = [5,10,15,20];
console.log("Sum:", arrayHelpers.sum(numbers));
console.log("Average:", arrayHelpers.average(numbers));
console.log("Max:", arrayHelpers.max(numbers));
console.log("Min:", arrayHelpers.min(numbers));