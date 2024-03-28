// var photo = document.getElementById("photo");
// var thumbnail = document.querySelectorAll(".mini_img > li > img");

// for ( var i = 0; i < thumbnail.length; i++ )
//   thumbnail[i].addEventListener("click", function () {

//     photo.setAttribute("src", this.getAttribute("src"));
//   });

let slides = document.querySelectorAll(".container > img");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let current = 0;

showSlide(current);

function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}

prev.onclick = preSlide;
next.onclick = nextSlide;

function preSlide() {
  if (current > 0) current -= 1;
  else current = slides.length - 1;
  showSlide(current);
}

function nextSlide() {
  if (current < slides.length - 1) current += 1;
  else current = 0;
  showSlide(current);
}
