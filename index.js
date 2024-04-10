var rndResult1;
var rndResult2;
var temp1;
var temp2
const btn = document.getElementById("btn");

document.getElementById("dot2Dice1").classList.add("invisible");
document.getElementById("dot8Dice1").classList.add("invisible");
document.getElementById("dot5Dice1").classList.add("invisible");

document.getElementById("dot2Dice2").classList.add("invisible");
document.getElementById("dot8Dice2").classList.add("invisible");
document.getElementById("dot5Dice2").classList.add("invisible");

btn.addEventListener("click", rollTheDices);

temp1 = Math.random();
temp1 = temp1 * 6;
temp1 = Math.floor(temp1);
temp1 = temp1 + 1;

temp2 = Math.random();
temp2 = temp2 * 6;
temp2 = Math.floor(temp2);
temp2 = temp2 + 1;

rndResult1 = temp1;
rndResult2 = temp2;

function rollTheDices(){

if(rndResult1 === 1){
    document.getElementById("dot1Dice1").classList.add("invisible");
    document.getElementById("dot2Dice1").classList.add("invisible");
    document.getElementById("dot3Dice1").classList.add("invisible");
    document.getElementById("dot4Dice1").classList.add("invisible");
    document.getElementById("dot5Dice1").classList.add("visible");
    document.getElementById("dot6Dice1").classList.add("invisible");
    document.getElementById("dot7Dice1").classList.add("invisible");
    document.getElementById("dot8Dice1").classList.add("invisible");
    document.getElementById("dot9Dice1").classList.add("invisible");
    } else if(rndResult1 === 2){
    document.getElementById("dot1Dice1").classList.add("invisible");
    document.getElementById("dot2Dice1").classList.add("invisible");
    document.getElementById("dot4Dice1").classList.add("invisible");
    document.getElementById("dot6Dice1").classList.add("invisible");
    document.getElementById("dot8Dice1").classList.add("invisible");
    document.getElementById("dot9Dice1").classList.add("invisible");
    document.getElementById("dot5Dice1").classList.add("invisible");
    } else if(rndResult1 === 3){
    document.getElementById("dot1Dice1").classList.add("invisible");
    document.getElementById("dot2Dice1").classList.add("invisible");
    document.getElementById("dot4Dice1").classList.add("invisible");
    document.getElementById("dot6Dice1").classList.add("invisible");
    document.getElementById("dot8Dice1").classList.add("invisible");
    document.getElementById("dot9Dice1").classList.add("invisible");
    } else if(rndResult1 === 4){
    document.getElementById("dot2Dice1").classList.add("invisible");
    document.getElementById("dot4Dice1").classList.add("invisible");
    document.getElementById("dot6Dice1").classList.add("invisible");
    document.getElementById("dot8Dice1").classList.add("invisible");
    document.getElementById("dot5Dice1").classList.add("invisible");
    } else if(rndResult1 === 5){
    document.getElementById("dot2Dice1").classList.add("invisible");
    document.getElementById("dot4Dice1").classList.add("invisible");
    document.getElementById("dot6Dice1").classList.add("invisible");
    document.getElementById("dot8Dice1").classList.add("invisible");
    }else if (rndResult1 === 6){
    document.getElementById("dot2Dice1").classList.add("invisible");
    document.getElementById("dot8Dice1").classList.add("invisible");
    document.getElementById("dot5Dice1").classList.add("invisible");
}

if(rndResult2 === 1){
    document.getElementById("dot1Dice2").classList.add("invisible");
    document.getElementById("dot2Dice2").classList.add("invisible");
    document.getElementById("dot3Dice2").classList.add("invisible");
    document.getElementById("dot4Dice2").classList.add("invisible");
    document.getElementById("dot5Dice2").classList.add("visible");
    document.getElementById("dot6Dice2").classList.add("invisible");
    document.getElementById("dot7Dice2").classList.add("invisible");
    document.getElementById("dot8Dice2").classList.add("invisible");
    document.getElementById("dot9Dice2").classList.add("invisible");
    } else if(rndResult2 === 2){
    document.getElementById("dot1Dice2").classList.add("invisible");
    document.getElementById("dot2Dice2").classList.add("invisible");
    document.getElementById("dot4Dice2").classList.add("invisible");
    document.getElementById("dot6Dice2").classList.add("invisible");
    document.getElementById("dot8Dice2").classList.add("invisible");
    document.getElementById("dot9Dice2").classList.add("invisible");
    document.getElementById("dot5Dice2").classList.add("invisible");
    } else if(rndResult2 === 3){
    document.getElementById("dot1Dice2").classList.add("invisible");
    document.getElementById("dot2Dice2").classList.add("invisible");
    document.getElementById("dot4Dice2").classList.add("invisible");
    document.getElementById("dot6Dice2").classList.add("invisible");
    document.getElementById("dot8Dice2").classList.add("invisible");
    document.getElementById("dot9Dice2").classList.add("invisible");
    } else if(rndResult2 === 4){
    document.getElementById("dot2Dice2").classList.add("invisible");
    document.getElementById("dot4Dice2").classList.add("invisible");
    document.getElementById("dot6Dice2").classList.add("invisible");
    document.getElementById("dot8Dice2").classList.add("invisible");
    document.getElementById("dot5Dice2").classList.add("invisible");
    } else if(rndResult2 === 5){
    document.getElementById("dot2Dice2").classList.add("invisible");
    document.getElementById("dot4Dice2").classList.add("invisible");
    document.getElementById("dot6Dice2").classList.add("invisible");
    document.getElementById("dot8Dice2").classList.add("invisible");
    }else if (rndResult2 === 6){
    document.getElementById("dot2Dice2").classList.add("invisible");
    document.getElementById("dot8Dice2").classList.add("invisible");
    document.getElementById("dot5Dice2").classList.add("invisible");
}

if(rndResult1 === rndResult2){
    document.getElementById("ttl").innerHTML = "It was a draw!";
 } else if (rndResult1 > rndResult2) {
    document.getElementById("ttl").innerHTML = "Player 1 won!";
}else{
    document.getElementById("ttl").innerHTML = "Player 2 won!";
 }

}