
let red = document.querySelector('#red');
let yellow = document.querySelector('#yellow');
let green = document.querySelector('#green');





function startTraficsignal() {
    red.style.opacity = 1;
    yellow.style.opacity = 0.2;
    green.style.opacity = 0.2;

    setTimeout(function()  {
        red.style.opacity = 0.2;
        yellow.style.opacity = 1;
        green.style.opacity = 0.2;
    }, 6000);

   

    setTimeout(function()  {
        green.style.opacity = 1;
        red.style.opacity = 0.2;
        yellow.style.opacity = 0.2;

    }, 10000);
}

let timer = setInterval(function() {
    startTraficsignal()
}, 20000);

startTraficsignal();


//COUNTDOWN TIMER
let startTime = 9;
let counter = document.querySelector('.countter');


function updateCountdown() {
    counter.innerHTML = `${startTime}`
    startTime--
 if (startTime < 1) {
    startTime = 10;
 }

}

setInterval(updateCountdown, 1000);

