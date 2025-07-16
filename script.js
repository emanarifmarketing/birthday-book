let currentPage = 0;
const pages = document.querySelectorAll(".page");
const flipSound = document.getElementById("flipSound");

function flipPage() {
  pages[currentPage].classList.remove("active");

  if (currentPage >= pages.length - 1) {
    currentPage = 0;
  } else {
    currentPage++;
  }

  pages[currentPage].classList.add("active");
  flipSound.currentTime = 0;
  flipSound.play();
}
