var minh = document.getElementById("min");
var sech = document.getElementById("sec");
var msech = document.getElementById("msec");

var min = 0;
var sec = 0;
var msec = 0;
var interval;
function show(){
    msec++
    msech.innerHTML = msec
    console.log(msec)
    if(msec >= 100){
        sec++
        sech.innerHTML = sec
        msec = 0;
    }else if(sec >= 60){
        min++
        minh.innerHTML = min;
        sec = 0;
    }
}

function start(){
    interval = setInterval(show,10)
    document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
}
function stop(){
    clearInterval(interval)
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
}
function reset(){
    min = 0;
    minh.innerHTML = min;
    sec = 0;
    sech.innerHTML = sec;
    msec = 0;
    msech.innerHTML = msec;
    stop()
}