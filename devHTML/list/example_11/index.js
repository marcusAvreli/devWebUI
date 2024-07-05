const main = document.querySelector('main');
const scrollProgress = document.getElementById('scroll-progress')

const progress = () => {
    const scroll = main.scrollTop;
    const height = main.scrollHeight - main.clientHeight;
    const percent = (scroll / height) * 100;
    scrollProgress.style.width = percent + "%";
}

main.addEventListener('scroll', progress);