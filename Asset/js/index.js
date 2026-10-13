const projectmodals = document.querySelectorAll(".exp_dev_proj_box_img");

projectmodals.forEach(modalBox => {
    const modal = modalBox.querySelector(".modal_display");
    const imgClicked = modalBox.querySelector(".modal");
    const closeBtn = modal.querySelector(".modal_close");

    imgClicked.addEventListener("click",() => {
        modal.classList.remove("modal_hidden");
        document.body.classList.add('no-scroll');
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.add("modal_hidden");
        document.body.classList.remove('no-scroll');
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.add("modal_hidden");
            document.body.classList.remove('no-scroll');
        }
    });

});

