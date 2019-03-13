// var ImgIndex = 1;
// showImg(ImgIndex);

// Next/previous controls
function moveImg(n) {
    showImg(ImgIndex += n);
};

// // dot controls
// function Img(n) {
//   showImg(ImgIndex = n);
// };

// function showImg(n) {
//   var i;
//   var img = document.getElementsByClassName("carousel__image");
//   var dots = document.getElementsByClassName("carousel__dots");
//   if (n > img.length) {
//       ImgIndex = 1}; 
//   if (n < 1) {
//       ImgIndex = img.length};
//   for (i = 0; i < img.length; i++) {
//       img[i].style.display = "none"; 
//   };

//   img[ImgIndex-1].style.display = "block"; 

// }

var ImgIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("carousel__image");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    ImgIndex++;
    if (ImgIndex > x.length) { ImgIndex = 1 }
    x[ImgIndex - 1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}