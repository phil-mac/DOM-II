const rockets = document.querySelectorAll('.block');
const rocketParent = document.querySelector('.blocks');

let clicking;
let activeRocket;

rockets.forEach((rocket, index) => {
    rocket.addEventListener('click', () => {
        TweenMax.to(rocket, 1, {
            y: `-=${activeRocket.getBoundingClientRect().top - 73.44}`,
            onComplete: () => {
                rocketParent.prepend(rocket);
                TweenMax.to(rocket, 0, {y: 0});
            }
        });
    })
    rocket.addEventListener('mousedown', () => {
        clicking = true;
        activeRocket = rocket;
        // clearInterval(returnRocket);
    })
    rocket.addEventListener('mouseup', () => {
        clicking = false;
        // returnRocket();
    })
    rocket.addEventListener('mouseleave', () => {
        clicking = false;
    })
    rocket.addEventListener('mouse', () => {
        clicking = false;
    })
})

setInterval(function(){
    if (clicking && activeRocket.getBoundingClientRect().right < 1000){
        TweenMax.to(activeRocket, 0.1, {x: "+=10"});
        console.log(activeRocket.getBoundingClientRect().top);
    }
}, 100);

// const returnRocket = setInterval(function(){
//     TweenMax.to(activeRocket, 1, {x: 0}); 
// }, 100);
