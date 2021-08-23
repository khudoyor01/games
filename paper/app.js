const container = document.querySelector("h1");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
let img = document.querySelector(".img");
let arrayImg = ["images/paper.png", "images/rock.png", "images/scissors.png"];

let randomImg = arrayImg[Math.floor(Math.random() * arrayImg.length)];
let imgs = (container.appendChild(new Image()).src = randomImg);

btn1.addEventListener("click", () => {
  let x = (img.src = "images/paper.png");
  if (x === imgs) {
    console.log(true);
  } else {
    console.log(false);
  }
});

btn2.addEventListener("click", () => {
  let v = (img.src = "images/rock.png");
  if (v === imgs) {
    console.log(true);
  } else {
    console.log(false);
  }
});

btn3.addEventListener("click", () => {
  let c = (img.src = "images/scissors.png");
  if (c === imgs) {
    console.log(true);
  } else {
    console.log(false);
  }
});
