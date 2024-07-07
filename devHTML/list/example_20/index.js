const main = document.querySelector('.contentsub');
const main2 = document.querySelector('.contacts-wrapper');
const scrollProgress = document.getElementById('scroll-progress')

const progress = () => {
    const scroll = main.scrollTop;
console.log("scrolling");
    const height = main.scrollHeight - main.clientHeight;
    const percent = (scroll / height) * 100;
    scrollProgress.style.width = percent + "%";
}

const handleKeydown = (e) => {
   console.log("keydown:"+e.key);
}
 //main.firstElementChild.focus()
main.addEventListener('scroll', progress);
//main.addEventListener('keydown', handleKeydown);
