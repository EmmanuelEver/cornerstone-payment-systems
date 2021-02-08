const modal = document.querySelector(".modal-wrapper");
let toggleButtons = document.querySelectorAll(".toggle-modal");
const backdrop = document.querySelector(".backdrop");
const closeButton = document.querySelector("#close-modal");


const showModal = () => {
    modal.classList.add("translate-x-1/2");
    modal.classList.remove("-translate-x-full");
    backdrop.classList.add("block");
    backdrop.classList.remove("hidden");
    backdrop.addEventListener("click", hideModal);
    closeButton.addEventListener("click", hideModal);
    
}

const hideModal = () => {
    modal.classList.remove("translate-x-1/2");
    modal.classList.add("-translate-x-full");
    backdrop.classList.remove("block");
    backdrop.classList.add("hidden");
    backdrop.removeEventListener("click", hideModal);
    closeButton.removeEventListener("click", hideModal);
}

toggleButtons.forEach( elem => (elem.addEventListener("click", showModal)));
