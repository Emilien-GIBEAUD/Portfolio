const modal = document.querySelector(".modal_display");
const imgClicked = document.querySelector(".modal");

imgClicked.addEventListener("click", () => {
    displayModal();
});

function displayModal(){
    modal.classList.toggle("modal_hidden");
    const closeBtn = modal.querySelector(".modal_close");
    closeBtn.addEventListener("click", hideModal);
    document.body.classList.toggle('no-scroll');
}

function hideModal(){
    modal.classList.toggle("modal_hidden");
    document.body.classList.toggle('no-scroll');
}
