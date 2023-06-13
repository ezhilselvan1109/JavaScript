let first=0;
let second;
function guess(){
    return Math.floor(Math.random()*100+1)
}
document.getElementById("check").onclick=function(){
    second=guess();
    first=document.getElementById("input").value;
    if (first == ""){
        return;
    }else{
        document.getElementById("input").value ="";
    }
    let result;
    if(second==first){
        result="Win";
    }else{
        result="Out";
    }
    document.getElementById("result").style.backgroundColor = "white";
    document.getElementById("ans").innerHTML="Result: "+result;
    document.getElementById("you").innerHTML="Your Number: "+first;
    document.getElementById("sys").innerHTML="System Gernerator: "+second;
}



// let userNumber;
// let systemNumber=0;
// let score=0;
// function systemNumberr(){
//     return Math.floor(Math.random()*100+1);
// }
// document.getElementById("check").onclick=function(){
//     first=document.getElementById("input").value;
//     if (userNumber == ""){
//         return;
//     }else{
//         document.getElementById("input").value ="";
//     }
//     systemNumber=getGuessNumber();
//     console.log(systemNumber);
//     if(systemNumber==userNumber){
//         score++;
//         document.getElementById("result").style.backgroundColor = "white";
//         document.getElementById("score").innerHTML="Score: "+score;
//     }else if(systemNumber<userNumber){
//         console.log="high"
//     }else{
//         console.log="low"
//     }
// }

// function start(){
//     systemNumber=systemNumberr();
//     systemNumber=Number(systemNumber);
//     console.log(systemNumber);
//     score=0;
// }
// function getGuessNumber(){
//     return Number(systemNumber);
// }