/** @format */

let button = document.querySelector("button.contact-btn");
button.addEventListener("click", changeText);

function changeText() {
  let textElement = document.querySelector("div.play-div");
  textElement.innerHTML = "maxyeats@mail.com";
}
