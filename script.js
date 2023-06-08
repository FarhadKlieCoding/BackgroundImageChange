let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

btn1.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('image1.png')";
});
btn2.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('image2.png')";
});

btn3.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('image3.png')";
});

btn4.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('image4.png')";
});
btn5.addEventListener("click", () => {
  document.body.style.backgroundImage = "url('image5.jpg')";
});
