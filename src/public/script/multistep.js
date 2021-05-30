const


slidePage = document.querySelector(".slide-page");
var nextBtnFirst = document.querySelector(".firstNext");
var prevBtnSec = document.querySelector(".prev-1");
var nextBtnSec = document.querySelector(".next-1");
var prevBtnThird = document.querySelector(".prev-2");
var nextBtnThird = document.querySelector(".next-2");
var prevBtnFourth = document.querySelector(".prev-3");
var submitBtn = document.querySelector(".submit");
var progressText = document.querySelectorAll(".step p");
var progressCheck = document.querySelectorAll(".step .check");
var bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event)
{
  DeslizarAdelante("-25%");
});

nextBtnSec.addEventListener("click", function(event)
{
  DeslizarAdelante("-50%");
});

nextBtnThird.addEventListener("click", function(event)
{
  DeslizarAdelante("-75%");
});

prevBtnSec.addEventListener("click", function(event)
{
  DeslizarAtras("0%");
});

prevBtnThird.addEventListener("click", function(event)
{
  DeslizarAtras("-25%");
});

prevBtnFourth.addEventListener("click", function(event)
{
  DeslizarAtras("-50%");
});

function DeslizarAtras(p_margen)
{
  slidePage.style.marginLeft = p_margen;
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
}

function DeslizarAdelante(p_margen)
{
  slidePage.style.marginLeft = p_margen;
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;

}

submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});