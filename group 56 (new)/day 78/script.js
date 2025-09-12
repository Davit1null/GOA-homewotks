// 1
let pTags = document.querySelectorAll("p");
alert("Total <p> tags: " + pTags.length);
// 2
let h2Tags = document.querySelectorAll("h2");
h2Tags.forEach(h2 => {
  h2.style.color = "blue";
});
// 3
let liTags = document.querySelectorAll("li");
liTags.forEach(li => {
  console.log(li.textContent);
});
// 4
let divs = document.querySelectorAll("div");
divs.forEach(div => {
  div.style.backgroundColor = "lightgray";
});
// 5
let firstImg = document.querySelector("img");
if (firstImg) {
  firstImg.src = "https://via.placeholder.com/150";
}
// 6
let highlights = document.querySelectorAll(".highlight");
highlights.forEach(el => {
  el.style.backgroundColor = "yellow";
});
// 7
let cards = document.querySelectorAll(".card");
console.log("Number of .card elements:", cards.length);
// 8
let errors = document.querySelectorAll(".error");
errors.forEach(el => {
  el.style.color = "red";
});
// 9
let items = document.querySelectorAll(".item");
items.forEach(el => {
  console.log(el.innerHTML);
});
// 10
let firstButton = document.querySelector(".button");
if (firstButton) {
  firstButton.textContent = "Clicked!";
}

