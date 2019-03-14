//carousel//

var image = 1;
showImg(image);

function currentImg(n) {
  showImg(image += n);
}

function showImg(n) {
  var i;
  var images = document.getElementsByClassName("carousel__image");
 
  if (n > images.length) {
      image = 1
    } 
  if (n < 1) {
      image = images.length
    }
  for (i = 0; i < images.length; i++) {
      images[i].style.display = "none"; 
  }
  images[image-1].style.display = "block";   
}

//tech modal//

const openModal = document.querySelector('.modal__tech--button');
const closeModal = document.querySelector('#modal__tech--close');

openModal.addEventListener('click', () => {
  toggleShowTech(document.querySelector('.modal__tech'))
});

function toggleShowTech(element) {
  element.classList.toggle('show__tech__modal');
}

closeModal.addEventListener('click', () => {
  toggleShowTech(document.querySelector('.modal__tech'))
});

//hospital modal//

const openHospitalModal = document.querySelector('.portfolio__thumbnail');
const closeHospitalModal = document.querySelector('#modal__hospital--close');

openHospitalModal.addEventListener('click', () => {
  toggleShowHospital(document.querySelector('.modal__hospital'))
});

function toggleShowHospital(element) {
  element.classList.toggle('show__hospital__modal');
}

closeHospitalModal.addEventListener('click', () => {
  toggleShowHospital(document.querySelector('.modal__hospital'))
});

//portfolio modal//

const openHospitalModal = document.querySelector('.portfolio__thumbnail');
const closeHospitalModal = document.querySelector('#modal__hospital--close');

openHospitalModal.addEventListener('click', () => {
  toggleShowHospital(document.querySelector('.modal__hospital'))
});

function toggleShowHospital(element) {
  element.classList.toggle('show__hospital__modal');
}

closeHospitalModal.addEventListener('click', () => {
  toggleShowHospital(document.querySelector('.modal__hospital'))
});

