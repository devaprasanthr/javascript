// const variable = 'devaprasanth';
// const number= 434;
// console.log(variable.length);
// console.log(variable.charAt(0));
// console.log(variable.indexOf('e'));
// console.log(variable.slice(1,10));
// console.log(Number(number) + 3);
// const myName='manojkumar';
// console.log(myName.charAt[Math.floor(Math.random()*myName.lenght)]);

const Player = 'Rock';
const computermove = 'Rock';
let result =Player === computermove ? 
"Tie!!!"
: Player === 'Rock' && computermove === 'paper'?
'computerwin!'
: Player === 'Paper' && computermove === 'Rock'? 
'Player wins!'
:'computer win!';
console.log(result);


let Name = prompt('Enter your name');
if (Name){
console.log(Name ??'Please Enter your name');}
else{
  console.log("Please Enter your name");
}
console.log(Name.trim().length);