const main = document.querySelector('section');
const scrollProgress = document.getElementById('scroll-progress')

const progress = () => {
    const scroll = main.scrollTop;
	console.log("scrolling");
    const height = main.scrollHeight - main.clientHeight;
    const percent = (scroll / height) * 100;
    scrollProgress.style.width = percent + "%";
}

main.addEventListener('scroll', progress);