const date = new Date();

function newTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let meridiem = "AM";

    // AM va PM o'zgaruvchisini aniqlash
    if (hours > 12) {
        hours = hours;
        meridiem = "PM";
    }

    // 0-9 sonlari uchun oldiga 0 qo'shish
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    // HTML elementiga soatni chiqarish
    const timeString = `${hours}:`;
    document.getElementById("ap1").innerHTML = timeString;

    const timeStringm = ` ${minutes}:`;
    document.getElementById("ap2").innerHTML = timeStringm;

    const timeStringmm = `${seconds} ${meridiem}`;
    document.getElementById("ap3").innerHTML = timeStringmm;

}



setInterval(newTime);




const yil = date.getFullYear()
const oy = date.getMonth() + 1
const kun = date.getDate()


let test1 = document.querySelector(".test1")
if (date.getDate) {
    test1.textContent = `${kun} : `
}



let test2 = document.querySelector(".test2")
if (date.getMonth) {
    test2.textContent = `${oy} :    `
}


let test3 = document.querySelector(".test3")
if (date.getFullYear) {
    test3.textContent = `${yil} `
}





