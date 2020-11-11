// selector
let time = document.getElementById("time");
let greeting = document.getElementById("greeting");
let name = document.getElementById("name");
let day = document.getElementById("day");


//Event Handler

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

//Function
function showTime() {
    let date = new Date().toLocaleTimeString();
    let daye = new Date().toDateString();
    time.innerHTML = date;
    day.innerHTML = daye;
    setTimeout(showTime, 1000);
}

function setGreeting() {
    let hours = new Date().getHours();
    if (hours >= 0 && hours < 12) {
        greeting.innerHTML = "Good Morning";
        document.body.style.backgroundImage = 'url("../images/morning.jpg")';
    }
    else if(hours>= 12 && hours < 17) {
        greeting.innerHTML = "Good Afternoon";
        document.body.style.backgroundImage = 'url("../images/afternoon.jpg")';
    }
    else if (hours >= 17 && hours < 20) {
        greeting.innerHTML = "Good Evening";
        document.body.style.backgroundImage = 'url("../images/evening.jpg")';
    }
    else {
        greeting.innerHTML = "Good Night";
        document.body.style.backgroundImage = 'url("../images/night.jpg")';
        document.body.style.color = "white";
    }
    // console.log(hours);
}
function getName() {
    if (localStorage.getItem("myName") == null) {
        name.innerHTML = "Enter Name";
    }
    else {
        name.innerHTML = localStorage.getItem("myName");
    }
}
function setName(e) {
    if (e.type == "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem("myName", name.innerHTML)
            name.blur();
        }
    }
    else {
        localStorage.setItem("myName",name.innerHTML)
    }
}

// Function call
showTime();
setGreeting();
getName();