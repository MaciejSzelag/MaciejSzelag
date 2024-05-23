
const textWrappers = [
    document.querySelector('.msN'),
    document.querySelector('.msN-1'),
    document.querySelector('.msN-2'),
    document.querySelector('.msN-3')
];
const ulLi = [
    document.querySelector('.ul-li'),
    document.querySelector('.ul-li-1'),
    document.querySelector('.ul-li-2'),
    document.querySelector('.ul-li-3'),
    document.querySelector('.ul-li-4')
];

textWrappers.forEach(wrapper => {
    wrapper.innerHTML = wrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});
ulLi.forEach(wrapper => {
    wrapper.innerHTML = wrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}

const animateLetters = (selector, spanClass) => {
    anime({
        targets: `${selector} ${spanClass}`,
        opacity: [0, 1],
        scale: [8, 1],
        rotate: [180, 0],
        translateX: [() => getRandomValue(-window.innerWidth, window.innerWidth), 0],
        translateY: [() => getRandomValue(-window.innerHeight, window.innerHeight), 0],
        easing: "easeInOutQuad",
        duration: 4000,
        delay: (el, i) => 100 * (i + 1)
    });
};
setTimeout(() => {
    animateLetters('.msN', ".letter");
    animateLetters('.msN-1', ".letter");
    animateLetters('.msN-2', ".letter");
    animateLetters('.msN-3', ".letter");
}, 2000)

setTimeout(() => {
    document.body.classList.remove("body-lock")
}, 8500)

// When the user scrolls the page, execute myFunction 
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}
const menuBtn = document.querySelector(".bar-container");
const menuBtnContent = document.querySelector(".bars-container");
const menuContainer = document.querySelector(".menu-cantainer");
let active = true;
const li_a = document.querySelectorAll(".li_a")

if (active) {
    li_a.forEach((a) => {
        a.addEventListener("click", () => {
            menuContainer.classList.remove("active-menu");
            menuBtnContent.classList.remove("active-bars-container");
            document.body.classList.remove("body-lock")
            console.log("click");
            active = !active
        })
    })
}
menuBtn.addEventListener("click", () => {
    if (active) {
        menuContainer.classList.add("active-menu");
        menuBtnContent.classList.add("active-bars-container")
        document.body.classList.add("body-lock")
        setTimeout(() => {
            animateLetters('.ul-li', ".letter");
            animateLetters('.ul-li-1', ".letter");
            animateLetters('.ul-li-2', ".letter");
            animateLetters('.ul-li-3', ".letter");
            animateLetters('.ul-li-4', ".letter");
        }, 300)

        active = !active
    } else if (!active) {
        menuContainer.classList.remove("active-menu");
        menuBtnContent.classList.remove("active-bars-container")
        document.body.classList.remove("body-lock")
        active = !active
    }
})

const btnSubmit = document.getElementById("submit-btn");
const loader = document.querySelector(".loader");
btnSubmit.addEventListener("click", () => {
    loader.classList.add("active-loader");
})