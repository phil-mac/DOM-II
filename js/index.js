// Your code goes here

// 1, 2: mouseover, mouseleave and click prevent default
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        TweenMax.to(link, 0.3, {scale: 1.4});
    });
    link.addEventListener('mouseleave', () => {
        TweenMax.to(link, 0.3, {scale: 1.0});
    });
    link.addEventListener('click', (e) => {
        e.preventDefault();
    })
});

// 3: keydown 
//(x: make image rotate on y and swap image halfway)
let random = true;
const letsGoImg = document.querySelector('.content-section img');
document.addEventListener('keydown', () => {
    letsGoImg.style.height = '250px';

    if (random === true)
    {
        letsGoImg.src = "https://source.unsplash.com/random";
        random = false;
    }else{
        letsGoImg.src = "img/adventure.jpg";
        random = true;
    }
});

// 4: wheel
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('wheel', (event) => {
        event.preventDefault();
        TweenMax.to(img, 0.1, {rotation:event.deltaY*0.1, borderRadius:Math.abs(event.deltaY)*1});
    })
    img.addEventListener('mouseleave', () => {
        TweenMax.to(img, 0.2, {rotation:0, borderRadius:5});
    })
})

// 5, 6, 7: drag & drop
const dragBoxes = document.querySelectorAll('.imgD');
let dragged;
dragBoxes.forEach(box => {

    box.addEventListener('click', (event) => {
        event.target.style.background = 'green';
    });

    document.addEventListener('dragstart', (event) => {
        dragged = event.target;
    }, false);
    
    document.addEventListener('dragover', (event) => {
        event.preventDefault();
    }, false);

    document.addEventListener('drop', (event) => {
        event.preventDefault();
        if (event.target.className == "imgBox") {
            event.target.style.background = "";
            dragged.parentNode.removeChild( dragged );
            event.target.appendChild( dragged );
          }
    }, false);
})

// 8: scroll

const texts = document.querySelectorAll('p, h1, h2, h3, h4');

window.addEventListener('scroll', () => {
    console.log("scroll");
    let randomColor = getRandomColor();
        texts.forEach(p =>{
        TweenMax.to(p, 0.5, {color:randomColor});
    });
});

const getRandomColor = function(){
    var letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 9: load
window.addEventListener('load', () => {
    images.forEach(img =>{
        TweenMax.from(img, 1, {x:1000});
    })
    texts.forEach(text =>{
        TweenMax.from(text, 1, {x:-1000});
    })
})

// 10: dblclick and nesting
const navBar = document.querySelector('.main-navigation');
const logoName = document.querySelector('.logo-heading');

logoName.style.padding = "10px";

navBar.addEventListener('dblclick', (e) => {
    navBar.style.background = getRandomColor();
})

logoName.addEventListener('dblclick', (e) => {
    logoName.style.background = getRandomColor();
    e.stopPropagation();
})