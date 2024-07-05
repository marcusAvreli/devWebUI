let fromArr = e => Array.from(e);

let sourceImage = [
    "img_1.jpg",
    "img_2.jpg",
    "img_3.jpg",
    "img_4.jpg",
    "img_5.jpg",
    "img_6.jpg",
    "img_7.jpg",
    "img_8.jpg",
    "img_9.jpg",
    "img_10.jpg",
    "img_11.jpg",
    "img_12.jpg",
    "img_13.jpg",
    "img_14.jpg",
    "img_15.jpg",
]

let titleMusic = [
    "Airborne Robot",
    "All Fals Down",
    "Alone",
    "Alone",
    "As It Was",
    "At the Speed of Light",
    "Birdsong",
    "Bittersweet",
    "Blue Bird (TV Size)",
    "Bwa !",
    "Electroman Adventures",
    "Faded",
    "Glimpe Of Us",
    "Golden Hour",
    "Lemon Tree",
]

let artistMusic = [
    "F777 // CookieBite",
    "Alan Walker // Plaudible",
    "Marsmello // Pachiru",
    "Alan Walker // Feerum",
    "Harry Styles // HEAVENLY MOON",
    "Dimrain47 // ExGon",
    "James Landino & Kabuki // _Kobii",
    "Nakanojojo // qoot8123",
    "Ikimono Gakari // arken1015",
    "Thaehan // Deif",
    "DJVI // Aihuro",
    "Dictate // Nepuri",
    "Cranky // Mao",
    "F-777 // walter85",
    "DJ Mbon Mbon // hehe",
]

let listImage = fromArr(document.querySelectorAll(".list-image"));
let listH1 = fromArr(document.querySelectorAll(".list-h1 h1"));
let listParagraph = fromArr(document.querySelectorAll(".list-paragraph p"));
let liList = fromArr(document.querySelectorAll(".li-list"));

let current = liList[12];

listImage.forEach( (e,i) =>{
    e.style.backgroundImage = `url(./assets/image/${sourceImage[i]})`
    listH1[i].innerHTML = `${titleMusic[i]}`;
    listParagraph[i].innerHTML = `${artistMusic[i]}`;
})

function scrollEffect(element){
    let multplier = 150;
    let formula0to50 = Math.round((1 - (element.getBoundingClientRect().top + (element.clientHeight / 2)) / (window.innerHeight / 2) ) * multplier);
    let formula50to100 = -Math.round((1 - (element.getBoundingClientRect().top + (element.clientHeight / 2)) / (window.innerHeight / 2) ) * multplier);
    liList.forEach(() =>{
        if(formula0to50 >= -200 && formula0to50 <= 200){
            if(formula0to50 <= 1 ){
                element.style.transform = `translateX(${formula50to100}px)`;
            }else{
                element.style.transform = `translateX(${formula0to50}px)`;
            }
        }
    })
}

current.style.backgroundColor = "red"
liList.forEach( element =>{
    window.addEventListener("scroll", () =>{
        scrollEffect(element)
    })
    window.addEventListener("load", () =>{
        scrollEffect(element)
    })
})


// Adding Click Active Effect and Change Backgroung depends on element is clicking