const main = document.querySelector('.contentsub');
const main2 = document.querySelector('.contacts-wrapper');
const scrollProgress = document.querySelector('.scroll-bar')
const formSteps = document.querySelectorAll(".form-step");
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progressSteps = document.querySelectorAll(".circle");
let formStepsNum = 0;
/* Event Listener for Next Button. */
nextBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
	   console.log("next_button");
    });
});

/* Event Listener for Back Button. */
prevBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        formStepsNum--;
       updateFormSteps();
        updateProgressbar();
		console.log("prev_button");
    });
});


/* Updates Form Items */
function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
        formStep.classList.remove("form-step-active")
    })
	console.log("formSteps:"+formSteps.length);
	console.log("formStepsNum:"+formStepsNum);
    formSteps[formStepsNum].classList.add("form-step-active");
}



function updateProgressbar() {
    progressSteps.forEach((progressStep, index) => {
        if ( index < formStepsNum + 1 ) {
            progressStep.classList.add('progress-step-active')
            
            
        } else {
            progressStep.classList.remove('progress-step-active')
        }
    })
   // progress.style.width = ((formStepsNum) / (progressSteps.length - 1)) * 100 + "%";
    
}



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
