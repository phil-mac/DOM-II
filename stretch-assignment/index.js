const rockets = document.querySelectorAll('.block');
const rocketParent = document.querySelector('.blocks');

let clicking;
let activeRocket;

let returningRockets = [false, false, false, false, false];

let topCoord = rocketParent.getBoundingClientRect().top + 10;

console.log(topCoord);

rockets.forEach((rocket, index) => {
    rocket.addEventListener('click', () => {
        TweenMax.to(rocket, 0.5, {
            y: `-=${activeRocket.getBoundingClientRect().top - topCoord}`,
            onComplete: () => {
                rocketParent.prepend(rocket);
                TweenMax.to(rocket, 0, {y: 0});
            }
        });
    })
    rocket.addEventListener('mousedown', () => {
        clicking = true;
        activeRocket = rocket;
        returningRockets[index] = false;
    })
    rocket.addEventListener('mouseup', () => {
        clicking = false;
        console.log("fired mouseup");
        returningRockets[index] = true;
    })
    rocket.addEventListener('mouseleave', () => {
        clicking = false;
        returningRockets[index] = true;
    })
    rocket.addEventListener('mouse', () => {
        clicking = false;
    })
})

setInterval(function(){
    if (clicking && activeRocket.getBoundingClientRect().right < 1000){
        TweenMax.to(activeRocket, 0.1, {x: "+=20"});
    }
    rockets.forEach((rocket, index) => {
        if (returningRockets[index] && rocket.getBoundingClientRect().right > 120){
            TweenMax.to(rocket, 0.1, {x: "-=10"});
        }
    })
}, 100);

window.addEventListener('resize', () => {
    topCoord = rocketParent.getBoundingClientRect().top + 10;
})

