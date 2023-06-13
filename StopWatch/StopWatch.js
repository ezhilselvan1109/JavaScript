let hours = 0, mintues = 0, seconds = 0;
let interval;
let flag=true;
function timer() {
    interval = setInterval(() => {
        if (seconds != 60) {
            seconds++;
            document.getElementById("second").innerHTML =formString(seconds);
        } else if (seconds == 60) {
            mintues++;
            seconds = 0;
            document.getElementById("minute").innerHTML =formString(mintues);
        } else if (mintues == 60) {
            hours++;
            mintues = 0;
            seconds = 0;
            document.getElementById("hour").innerHTML =formString(hours);
        }
        console.log(hours + ":" + mintues + ":" + seconds);
    }, 10);
}


function formString(number){
    if(number<=9){
        return "0"+number;
    }
    return number;
}

function start() {
    if (flag) {
        timer();
        document.getElementById("Start").style.backgroundColor="rgb(244, 55, 55)";
        document.getElementById("Start").innerHTML = "Stop";
        flag=false;
    }else{
        clearInterval(interval);
        document.getElementById("Start").style.backgroundColor="rgb(8, 246, 20)";
        document.getElementById("Start").innerHTML = "Start";
        flag=true;
    }
}

function Restart() {
    clearInterval(interval);
    hours = "00", mintues = "00", seconds ="00";
    document.getElementById("second").innerHTML = seconds;
    document.getElementById("minute").innerHTML = mintues;
    document.getElementById("hour").innerHTML = hours;
    document.getElementById("Start").style.backgroundColor="rgb(8, 246, 20)";
    document.getElementById("Start").innerHTML = "Start";
    flag=true;
}
