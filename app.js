let btn = document.querySelector("#btn");
let title = document.querySelector("#title");
let container = document.querySelector(".container");

function randomColor() {
  let rondomNumOne = Math.floor(Math.random() * 255);
  let rondomNumTwo = Math.floor(Math.random() * 255);
  let rondomNumThr = Math.floor(Math.random() * 255);
  return ` rgb(${rondomNumOne} , ${rondomNumTwo} , ${rondomNumThr})`;
}
btn.addEventListener("click", () => {
  let deg = Math.floor(Math.random() * 180);

  let gradient = `linear-gradient(${deg}deg, ${randomColor()} 0% , ${randomColor()} 46%, ${randomColor()} 100% )`;

  document.body.style.backgroundColor = randomColor();

  document.body.style.backgroundImage = gradient;
  title.textContent = gradient;
});
