// LAB D.O.M

// Building Main
const mainEl = document.querySelector("main");

// Background Color-string
mainEl.style.backgroundColor = "var(--main-bg)";

// content
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// add class
mainEl.classList.add("flex-ctr");


// ------------------------------------------

// menu bar
const topMenuEl = document.querySelector("#top-menu");

// height
topMenuEl.style.height = "100%";

// background menu bar
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// add class
topMenuEl.classList.add("flex-around");

// ---------------------------------------

// menu buttons

// data buttons

var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];

// menu links
for (const link of menuLinks){
    // a element
const newElement = document.createElement("a");
// href for link
    newElement.setAttribute("href", link.href);
    // text property
    newElement.innerHTML =link.text;
    // append - add
    topMenuEl.append(newElement);
}



