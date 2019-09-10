'use strict'; 

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

//2
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

//3
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

//4
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

//5
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

//6
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

//7
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

//8
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

//9
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

//10
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



