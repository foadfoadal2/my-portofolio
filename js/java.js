let nav = document.querySelector(".nav");
let span  = document.querySelector(".up");
document.querySelector("#open").onclick = ()=> { 
    nav.classList.add("right");
}
nav.onclick = () =>  {
    nav.classList.remove("right");
}
window.onscroll = () => { 
    if (window.scrollY >= 100) { 
    document.querySelector("header").classList.add("ground");
    }
    else {
    document.querySelector("header").classList.remove("ground");
    }
    if (window.scrollY >= 500) { 
        span.classList.add("show");
    }
    else { 
        span.classList.remove("show");
    }
}
span.onclick = () => { 
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};
ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});
ScrollReveal().reveal('section',{delay: 500, origin: 'bottom'});


