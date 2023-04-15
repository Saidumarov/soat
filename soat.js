const date = new Date();

function Time() {
    const date = new Date();
    let soat = date.getHours();
    let minut = date.getMinutes();
    let sekunt = date.getSeconds();
    let kku = "AM";

    if (soat > 12) {
        soat = soat;
        kku = "PM";
    }

    soat = (soat < 10) ? "0" + soat : soat;
    minut = (minut < 10) ? "0" + minut : minut;
    seconds = (sekunt < 10) ? "0" + sekunt : sekunt;


    const tim1 = `${soat}:`;
    document.getElementById("ap1").innerHTML = tim1;

    const tim2 = ` ${minut}:`;
    document.getElementById("ap2").innerHTML = tim2;

    const tim3 = `${sekunt} ${kku}`;
    document.getElementById("ap3").innerHTML = tim3;

}



setInterval(Time);




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





