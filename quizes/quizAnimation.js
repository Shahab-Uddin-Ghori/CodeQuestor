// animation for left side logo
// for topLogo
document.addEventListener("DOMContentLoaded", function () {
  const iconset = document.getElementById("logo");

  // Trigger the animation
  requestAnimationFrame(() => {
    iconset.style.opacity = 1;
    iconset.style.transform = "translateX(0)";
  });
});

/// quizSec animation
document.addEventListener("DOMContentLoaded", function () {
    const iconset = document.getElementById("quizSec");

    // Set initial opacity
    iconset.style.opacity = 0.5;

    // Trigger the animation
    requestAnimationFrame(() => {
        iconset.style.transform = "translateX(0)";
        
        // Use a timeout to delay the opacity transition
        setTimeout(() => {
            iconset.style.transition = "opacity 0.5s ease";
            iconset.style.opacity = 1;
        }, 1500); //  1.5 seconds
    });
});


// book animation fillped by btn
const preBtn = document.querySelector("#preBtn");
const forBtn = document.querySelector("#forBtn");
const book = document.querySelector("#book");

// pages
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");

//event listners for papers
preBtn.addEventListener("click", goPrevPage);
forBtn.addEventListener("click", goNextPage);

// creating book functions
// basic logic for book and no of papers
let currentLocation = 1;
let numOfPapers = 5;
let maxLocation = numOfPapers + 1;

//for book open
function openBook() {
  book.style.transform = "translate(50%)";
  preBtn.style.transform = "translateX(-270px)";
  forBtn.style.transform = "translateX(270px)";
}

//for close book
function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }
  preBtn.style.transform = "translateX(0px)";
  forBtn.style.transform = "translateX(0px)";
}

// for next page
function goNextPage() {
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        break;
      case 2:
        openBook();
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        break;
      case 3:
        openBook();
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        break;
      case 4:
        openBook();
        paper4.classList.add("flipped");
        paper4.style.zIndex = 4;
        break;
      case 5:
        openBook();
        paper5.classList.add("flipped");
        paper5.style.zIndex = 5;
        closeBook();
        break;
      default:
        throw new Error("unkown State");
    }
    currentLocation++;
  }
}
function goPrevPage() {
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 5;
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 4;
        break;
      case 4:
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 3;
        break;
      case 5:
        paper4.classList.remove("flipped");
        paper4.style.zIndex = 2;
        break;
      case 6:
        openBook();
        paper5.classList.remove("flipped");
        paper5.style.zIndex = 1;
        break;
      default:
        throw new Error("unkown State");
    }
    currentLocation--;
  }
}
