const message = `
Hello Mandi,

welcome to JavaScript!
Today is a beautiful day to be coding. 
I hear you are trying out multi-line strings
 using template literals
 
 Guess what you?
 When you use this method, you don't need the /n character!
 
 Amazing, Right?
 `;

 console.log(message);


 function createCard(name,age,hobby){
    return `
    <div class="card"
     <h2>${name}</h2>
     <p>Age:${age}</p>
     <p>Hobby: ${hobby}</p>
    </div>
    `;

 }
 const personCard = createCard("Asiphe", 27,"Running")
 console.log(personCard);


function greet(name){
    return `Hello ${name}`;
}

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Asiphe"));

const numbers = [1,2,3,4,5];
const doubled = numbers.map(num=>num*2);

console.log(doubled);