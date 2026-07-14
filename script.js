// LAB D.O.M

// Building Main
const mainEl = document.querySelector("main");

// Background Color-string
mainEl.style.backgroundColor = "var(--main-bg)";

// content
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// add class
mainEl.classList.add("flex-ctr");



// menu bar
const topMenuEl = document.querySelector("#top-menu");

// height
topMenuEl.style.height = "100%";

// background menu bar
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// add class
topMenuEl.classList.add("flex-around");
