document.getElementById("burger2").addEventListener("click", function () {
  document.querySelector(".navbar").classList.toggle("open");
});

const plus = document.getElementById("butplus");
const minus = document.getElementById("butminus");
const mult = document.getElementById("butmult");
const div = document.getElementById("butdiv");
const cos = document.getElementById("butcos");
const sin = document.getElementById("butsin");
const tg = document.getElementById("buttg");
const ctg = document.getElementById("butctg");
const buttons = [plus, minus, mult, div, cos, sin, tg, ctg];

let first = document.getElementById("first");
let second = document.getElementById("second");

let trigentry = document.getElementById("variable");

const result = document.getElementById("result");
const resulttrig = document.getElementById("result1");

let res = 0;
let val = 0;

function calculus(mark) {
  const num1 = parseFloat(first.value) || 0;
  const num2 = parseFloat(second.value) || 0;
  switch (mark) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      res = num2 !== 0 ? num1 / num2 : "error";
      break;
    case "cos":
      res = Math.cos();
  }
  buttons.forEach((button) => {
    button.style.backgroundColor = "white";
  });
  result.textContent = res;
}
function trig(mark1) {
  const num = parseFloat(variable.value);
  const radians = num * (Math.PI / 180);
  switch (mark1) {
    case "cos":
      val = Math.cos(radians);
      break;
    case "sin":
      val = Math.sin(radians);
      break;
    case "tg":
      val = radians % Math.PI === Math.PI / 2 ? "error" : Math.tan(radians);
      break;
    case "ctg":
      val = (radians & Math.PI) === 0 ? "error" : 1 / Math.tan(radians);
      break;
  }
  buttons.forEach((button) => {
    button.style.backgroundColor = "white";
  });
  result1.textContent = val.toFixed(2);
}
cos.addEventListener("click", (event) => {
  event.preventDefault();
  trig("cos");
  cos.style.backgroundColor = "red";
});
sin.addEventListener("click", (event) => {
  event.preventDefault();
  trig("sin");
  sin.style.backgroundColor = "red";
});
tg.addEventListener("click", (event) => {
  event.preventDefault();
  trig("tg");
  tg.style.backgroundColor = "red";
});
ctg.addEventListener("click", (event) => {
  event.preventDefault();
  trig("ctg");
  ctg.style.backgroundColor = "red";
});
plus.addEventListener("click", (event) => {
  event.preventDefault();
  calculus("+");
  plus.style.backgroundColor = "red";
});
minus.addEventListener("click", (event) => {
  event.preventDefault();
  calculus("-");
  minus.style.backgroundColor = "red";
});
mult.addEventListener("click", (event) => {
  event.preventDefault();
  calculus("*");
  mult.style.backgroundColor = "red";
});
div.addEventListener("click", (event) => {
  event.preventDefault();
  calculus("/");
  div.style.backgroundColor = "red";
});
const secretb = document.getElementById("secretb");
let count = 0;
secretb.addEventListener("click", (s) => {
  s.preventDefault();
  let random = Math.random() * 100;
  if (count === 4) {
    secretb.innerText = "Ok, you win";
    secretb.style.backgroundColor = "green";
    setTimeout(() => {
      window.location.href = "heihachi.html";
    }, 1500);
  } else {
    let randomx = Math.random() * 95;
    let randomy = Math.random() * 95;
    secretb.style.left = randomx + "%";
    secretb.style.top = randomy + "%";
    count++;
  }
});
