let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minutesItem = document.querySelector("#minutes");
let secondsItem = document.querySelector("#seconds");
let comingItem = document.querySelector(".coming");
let countdownItem = document.querySelector(".countdown");
let countDown = () => {
    let futureDate = new Date("30 april 2022");
    let endingDate = new Date("4 may 2022");
    let currentDate = new Date();
    let ongoingDate = endingDate - currentDate;
    let myDate;
    if(currentDate <= futureDate){
        myDate = futureDate - currentDate;
    }
    else{
        myDate = currentDate - futureDate;
        comingItem.innerHTML = "AstraX is Ongoing! Since:";
    }
    
    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(myDate / 1000 / 60) % 60;
    let seconds=Math.floor(myDate/1000) % 60;
    if(ongoingDate < 0){
        comingItem.innerHTML = "AstraX has Ended! See you next year!";
        countdownItem.remove();
    }
    daysItem.innerHTML = days;
    hoursItem.innerHTML = hours;
    minutesItem.innerHTML = minutes
    secondsItem.innerHTML =seconds;
}

countDown()

setInterval(countDown, 1000)