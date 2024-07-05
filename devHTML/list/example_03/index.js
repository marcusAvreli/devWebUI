const movieList = document.querySelector(".movie-list");

const layout = document.querySelector(".movies");

const movieCards = document.querySelectorAll(".list-item");

var layoutPos = 0;
var layoutHeight = 0;
var threshold = 0;
var movieListHeight = 0;

window.addEventListener("DOMContentLoaded",() => {
  layoutPos = layout.offsetTop;
  layoutHeight = layout.offsetHeight;
  threshold = layoutHeight/2;
  movieListHeight = movieList.offsetHeight;
  scrollHandler();
  layout.addEventListener("scroll",scrollHandler);
})

const scrollHandler = () => {
    movieCards.forEach((item,index) => {
        let itemPos = item.getBoundingClientRect().top;
        var scaleVal = 1 - Math.abs((threshold - itemPos)*0.6/layoutHeight);
        item.style.transform = `scale(${scaleVal})`;
    })
}