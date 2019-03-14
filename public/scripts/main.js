// var image = 1;
// showImg(image);

// // Next/previous controls
// function currentImg(n) {
//   showImg(image += n);
// }

// function showImg(n) {
//   var i;
//   var images = document.getElementsByClassName("carousel__image");
 
//   if (n > images.length) {
//       image = 1
//     } 
//   if (n < 1) {
//       image = images.length
//     }
//   for (i = 0; i < images.length; i++) {
//       images[i].style.display = "none"; 
//   }
//   images[image-1].style.display = "block";   
// }


const techModal = document.querySelector('.modal__tech');
const openModal = document.querySelector('.modal__tech--button');
const closeModal = document.querySelector("#modal__tech--close");

function showModal() {
  // Do this CSS classes instead of changing style in JS
  techModal.style.display = "block";
}

function hideModal() {
  techModal.style.display = "none";
}

openModal.addEventListener('click', showModal);
closeModal.addEventListener('click', hideModal);
