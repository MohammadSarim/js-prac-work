var content = document.querySelector(".content");
content.addEventListener("load" , todayTime());

// ==================================================== EventListener ====================================================


function todayTime(){
const time = new Date();
const hours = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();
// console.log(sec);
// min = checkTime(min);
sec = checkTime(sec);
content.innerHTML = hours + ":" + min + ":" + sec ;
const t = setTimeout(todayTime, 500); 
}

function checkTime(i) {
    // console.log(i);
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}