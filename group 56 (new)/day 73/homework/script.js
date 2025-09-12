// 2
let newP = document.createElement("p");
newP.textContent = "This is a new paragraph.";
document.body.appendChild(newP);

// 3
let containerDiv = document.createElement("div");
let newH1 = document.createElement("h1");
newH1.textContent = "Welcome to My Page";
containerDiv.appendChild(newH1);
document.body.appendChild(containerDiv);

// 4
let img = document.createElement("img");
img.src = "https://via.placeholder.com/150";
img.alt = "Placeholder Image";
document.body.appendChild(img);

// 5
let button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

// 6
let ul = document.createElement("ul");
let li1 = document.createElement("li");
li1.textContent = "First item";
let li2 = document.createElement("li");
li2.textContent = "Second item";
let li3 = document.createElement("li");
li3.textContent = "Third item";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
document.body.appendChild(ul);
// 7
let contentDiv = document.createElement("div");
contentDiv.id = "content";
contentDiv.innerHTML = "<p>First child</p><p>Second child</p>";
document.body.appendChild(contentDiv);

let firstChild = contentDiv.firstElementChild;
contentDiv.removeChild(firstChild);

// 8
let list = document.createElement("ul");
let item1 = document.createElement("li");
item1.textContent = "One";
let item2 = document.createElement("li");
item2.textContent = "Two";
let item3 = document.createElement("li");
item3.textContent = "Three";

list.appendChild(item1);
list.appendChild(item2);
list.appendChild(item3);
document.body.appendChild(list);

list.removeChild(list.lastElementChild);
// 9
let textContainer = document.createElement("div");
textContainer.id = "textContainer";
let oldP = document.createElement("p");
oldP.textContent = "Old paragraph";
textContainer.appendChild(oldP);
document.body.appendChild(textContainer);

let newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph";
textContainer.replaceChild(newParagraph, oldP);

// 10
let btnContainer = document.createElement("div");
let oldButton = document.createElement("button");
oldButton.textContent = "Remove me";
btnContainer.appendChild(oldButton);
document.body.appendChild(btnContainer);

let newSpan = document.createElement("span");
newSpan.textContent = "I'm a span now!";
btnContainer.replaceChild(newSpan, oldButton);

// 11
let oneItemUl = document.createElement("ul");
let oldLi = document.createElement("li");
oldLi.textContent = "Old item";
oneItemUl.appendChild(oldLi);
document.body.appendChild(oneItemUl);

let newLi = document.createElement("li");
newLi.textContent = "New item!";
oneItemUl.replaceChild(newLi, oldLi);

// 12
let oldH2 = document.createElement("h2");
oldH2.textContent = "I am an h2";
document.body.appendChild(oldH2);

let newH1Heading = document.createElement("h1");
newH1Heading.textContent = "Now I am an h1";

document.body.replaceChild(newH1Heading, oldH2);

