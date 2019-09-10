'use strict'; 

//Funktion som slår x antal gange

//array
var arrRoll = [0, 0, 0, 0, 0, 0, 0];
var flip;

//Funktion som slår terningen
function play(a){
	return Math.floor(Math.random()* a + 1);
}

//Funktion som fortæller, hvor mange sider der er på terningen
var a = 6;

//Antal gange terningen skal slå
//1
flip = play(a);
if ( flip === 1 ){
    arrRoll[1]++;
} else if ( flip === 2 ){
    arrRoll[2]++;
} else if ( flip === 3 ){
    arrRoll[3]++;
} else if ( flip === 4 ){
    arrRoll[4]++;
} else if ( flip === 5 ){
    arrRoll[5]++;
} else {
    arrRoll[6]++;
}
console.log(arrRoll);


//Funktionen som tjekker om alt er ens
function faces(a){
  return arrRoll === arrRoll[0];
}
console.log('Is everything equal? ' + arrRoll.every(faces));
// expected output: false


//whether there were any n's where n is between 1-6
var even = function(n) {
  // checks whether an element(n) is even
  return n % 2 === 0;
};

console.log('Is there any even numbers betweeen? ' + arrRoll.some(even));
// expected output: true


