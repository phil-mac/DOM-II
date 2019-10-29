// Your code goes here

// 1: mouseover
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        TweenMax.to(link, 0.3, {scale: 1.4});
    });
    link.addEventListener('mouseleave', () => {
        TweenMax.to(link, 0.3, {scale: 1.0});
    });
});

// 2: keydown 
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

// 3: wheel
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('wheel', (event) => {
        event.preventDefault();

        // scale += event.deltaY * -0.01;
        // img.style.transform = `scale(${scale})`;
        TweenMax.to(img, 0.1, {rotation:event.deltaY*0.1, borderRadius:Math.abs(event.deltaY)*1});
    })
    img.addEventListener('mouseleave', () => {
        TweenMax.to(img, 0.2, {rotation:0, borderRadius:5});
    })
})

// 4, 5, 6: drag & drop
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
        console.log("test");
        if (event.target.className == "imgBox") {
            event.target.style.background = "";
            dragged.parentNode.removeChild( dragged );
            event.target.appendChild( dragged );
          }
    }, false);
    
})

// 7: scroll