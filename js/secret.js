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
