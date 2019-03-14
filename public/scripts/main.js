var image = 1;
showImg(image);

// Next/previous controls
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