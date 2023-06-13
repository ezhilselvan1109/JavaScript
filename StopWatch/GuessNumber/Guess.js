var guessedNumber;
var score = 0;
let flag=true;
function getSystemNumber() {
    guessedNumber = Math.floor(Math.random() * 100 + 1);
    console.log("In Guess: " + guessedNumber);
}

function process() {
    console.log("In check guessedNumber: " + guessedNumber);
    var userNumber = document.getElementById("gussed_user_number").value;
    console.log("In check userNumber: " + userNumber);
    if (guessedNumber == undefined) {
        document.getElementById("result").style.backgroundColor="aqua";
        document.getElementById("p1").innerHTML = "Please Start Your Game";
    }else{
        if (guessedNumber == userNumber) {
            score++;
            console.log('Score: ' + score);
            document.getElementById("p1").innerHTML = "Score: " + score;
            document.getElementById("p2").innerHTML ="";
            getSystemNumber();
        } else if (guessedNumber < userNumber) {
            console.log('high');
            document.getElementById("p1").innerHTML = "Score: " + score;
            document.getElementById("p2").innerHTML = 'high';
        } else {
            console.log('low');
            document.getElementById("p1").innerHTML = "Score: " + score;
            document.getElementById("p2").innerHTML = 'low';
        }
    }

}

function start() {
    document.getElementById("result").style.backgroundColor="aqua";
    if(flag){
        document.getElementById("p1").innerHTML ="Game Started !"
        document.getElementById("Start").innerHTML="Restart"
        getSystemNumber();
        flag=false;
    }else{
        getSystemNumber();
        score=0;
        flag=true;
    }
}
