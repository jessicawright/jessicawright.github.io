//tech modal//

const openModal = document.querySelector('#modal__tech--button');

openModal.addEventListener('click', () => {
  toggleShowTech(document.querySelector('.modal__tech--content'))
});

function toggleShowTech(element) {
  element.classList.toggle('show');
}

// closeModal.addEventListener('click', () => {
//   toggleShowTech(document.querySelector('.modal__tech'))
// });

// //hospital modal//

// const openHospitalModal = document.querySelector('#portfolio__thumbnail__hospital');
// const closeHospitalModal = document.querySelector('#modal__hospital--close');

// openHospitalModal.addEventListener('click', () => {
//   toggleShowModal(document.querySelector('.modal__hospital'))
// });

// closeHospitalModal.addEventListener('click', () => {
//   toggleShowModal(document.querySelector('.modal__hospital'))
// });

// //portfolio modal//

// const openPortfolioModal = document.querySelector('#portfolio__thumbnail__portfolio');
// const closePortfolioModal = document.querySelector('#modal__portfolio--close');

// openPortfolioModal.addEventListener('click', () => {
//   toggleShowModal(document.querySelector('.modal__portfolio'))
// });

// closePortfolioModal.addEventListener('click', () => {
//   toggleShowModal(document.querySelector('.modal__portfolio'))
// });

// //pet modal//

// const openPetModal = document.querySelector('#portfolio__thumbnail__pet');
// const closePetModal = document.querySelector('#modal__pet--close');

// openPetModal.addEventListener('click', () => {
//   toggleShowModal(document.querySelector('.modal__pet'))
// });

// closePetModal.addEventListener('click', () => {
//   toggleShowModal(document.querySelector('.modal__pet'))
// });

// //toggle function//
// function toggleShowModal(element) {
//   element.classList.toggle('show__modal');
// };

// //accordion action//
// const hospitalSkillsBar = document.querySelector('#hospital-skills');
// const hospitalChallengesBar = document.querySelector('#hospital-challenges');
// const hospitalNextBar = document.querySelector('#hospital-next');
// const portfolioSkillsBar = document.querySelector('#portfolio-skills');
// const portfolioChallengesBar = document.querySelector('#portfolio-challenges');
// const portfolioNextBar = document.querySelector('#portfolio-next');
// const petSkillsBar = document.querySelector('#pet-skills');
// const petChallengesBar = document.querySelector('#pet-challenges');
// const petNextBar = document.querySelector('#pet-next');

// hospitalSkillsBar.addEventListener('click', () => {
//   toggleAccordion(document.querySelector('#hospital-skills-panel'))
// });

// hospitalChallengesBar.addEventListener('click', () => {
//   toggleAccordion(document.querySelector('#hospital-challenge-panel'))
// });

// hospitalNextBar.addEventListener('click', () => {
//   toggleAccordion(document.querySelector('#hospital-next-panel'))
// });

// portfolioSkillsBar.addEventListener('click', () => {
//   toggleAccordion(document.querySelector('#portfolio-skills-panel'))
// });

// portfolioChallengesBar.addEventListener('click', () => {
//   toggleAccordion(document.querySelector('#portfolio-challenge-panel'))
// });

// portfolioNextBar.addEventListener('click', () => {
//   toggleAccordion(document.querySelector('#portfolio-next-panel'))
// });

// petSkillsBar.addEventListener('click', () => {
//   toggleAccordion(document.querySelector('#pet-skills-panel'))
// });

// petChallengesBar.addEventListener('click', () => {
//   toggleAccordion(document.querySelector('#pet-challenge-panel'))
// });

// // petNextBar.addEventListener('click', () => {
// //   toggleAccordion(document.querySelector('#pet-next-panel'))
// // });

// //toggle function//
// function toggleAccordion(element) {
//   element.classList.toggle('accordion__panel--show');
// };

// //drop-down nav//

run();

function run() {
    bindNavButtonToNavList();
}

function toggleShow(element) {
    element.classList.toggle('show');
}

function bindNavButtonToNavList() {

    const navButton = document.querySelector('#nav__plus');

    navButton.addEventListener('click', function () {
        const navList = document.querySelector('.nav__hidden');
        toggleShow(navList);

    });

    window.addEventListener('mouseup', function(event) {
        const navList = document.querySelector('.nav__hidden');
        if(event.target != navList && event.target.parentNode != navList) {
            navList.classList.remove('show');
        }
    
    });
}
