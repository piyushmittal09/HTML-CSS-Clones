let hamOpen = document.querySelector("#hamburger-open");
let hamClose = document.querySelector("#hamburger-close");
let sidebar = document.querySelector(".sidebar");
const left = document.querySelector(".prev");
const right = document.querySelector(".next");
const slider = document.querySelector(".slides");
let sildeNumber = 1;
let images = document.querySelectorAll(".slide-images");
const slideLength = images.length;


hamOpen.addEventListener("click", function(){
  sidebar.classList.toggle("active");
})

const nextSlide = ()=>{
  slider.style.transform = `translateX(-${sildeNumber*100}%)`;
  sildeNumber++;
  slider.style.transition = "all 1s ease";
};

const prevSlide = ()=>{
  slider.style.transform = `translateX(${(sildeNumber-1)*-100}%)`;
  sildeNumber--;
  slider.style.transition = "all 1s ease";
};

const getFirstSlide = ()=>{
  slider.style.transform = `translateX(0%)`;
  sildeNumber = 1;
}

const getLastSlide = ()=>{
  slider.style.transform = `translateX(-${(length)*100}%)`;
  sildeNumber = slideLength;
}

right.addEventListener("click", ()=>{

  if(sildeNumber < slideLength){
    nextSlide();
  } else{
    getFirstSlide();
  }
  
});

left.addEventListener("click", ()=>{

  if(sildeNumber > 1){
    prevSlide();
  } else{
    getLastSlide();
  }
  
});

setInterval(()=>{
  
   if(sildeNumber < slideLength){
    nextSlide();
  } else{
    getFirstSlide();
  }

}, 5000);

