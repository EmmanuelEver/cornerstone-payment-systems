let slides = document.querySelector(".slides");
let slideItems = document.querySelectorAll(".slide-item");
let controlsContainer = document.querySelector(".slider-controls");
slides.style.width = `${slideItems.length * 100}%`;
let dataIndex = 0;
let current = null;

const addController = () => {
    let elem = document.createElement("span");
    elem.classList.add('w-2', 'h-2', 'rounded-full', 'bg-white', 'opacity-30', 'transition-all', 'cursor-pointer');
    return elem
}
const slide = (e) => {
    elemIndex = e.target.getAttribute("data-index");
    if(elemIndex !== dataIndex){
        current.classList.remove("opacity-100");
        current.classList.add("opacity-30");
        dataIndex = elemIndex;
        current = e.target;
        current.classList.add("opacity-100");
        current.classList.remove("opacity-30");
        slides.style.marginLeft = `${dataIndex * -100}%`;
    }
    
}

for (i = 0; i < slideItems.length; i++) {
    elem = addController();
    elem.addEventListener("click" , slide);
    elem.setAttribute("data-index", i);
    if (i == dataIndex) {
        current = elem;
        elem.classList.remove("opacity-30");
        elem.classList.add("opacity-100");
    }
    controlsContainer.appendChild(elem);
}

