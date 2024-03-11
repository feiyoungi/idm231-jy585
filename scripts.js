//help button
const open = document.getElementById ('open');
const help_modal_container = document.getElementById ('help_modal_container');
const close = document.getElementById ('close');

open.addEventListener ('click', () => {
  help_modal_container.classList.add ('show');
});

close.addEventListener ('click', () => {
  help_modal_container.classList.remove ('show');
});

//pokemon buttons
const modal = document.querySelector("#modal");
const openButtons = document.querySelectorAll(".open-button");
const closeModal = document.querySelector(".close-button");
//for customization
const modalTitle = modal.querySelector("h2");
const modalContent = modal.querySelectorAll("p");
const modalImage = modal.querySelector(".modal-image");

//to open and close the modal
openButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.showModal();
    });
});

closeModal.addEventListener("click", () => {
  modal.close();
});

//to customize the modal
function customizeModal(title, content, imageURL) {
    modalTitle.textContent = title;
    modalContent.forEach((p, index) => {
        p.textContent = content[index];
    modalImage.src = imageUrl;
    });
}

//event listeners to open buttons
openButtons.forEach(button => {
    button.addEventListener("click", () => {
        // customize modal content based on button clicked
        let title = "Default Title";
        let content = ["Default content paragraph 1", "Default content paragraph 2"];
        let imageUrl = "default-image-url.jpg";

        // customization based on button IDs
        if (button.id === "charizard") {
            title = "It's Charizard!";
            content = ["You are confident and ambitious, and you set the trail ablaze behind you wherever you go. You may be occasionally impatient and stubborn- you’re not exactly everyone’s cup of tea- but you are warm-hearted nonetheless."];
            imageUrl = "/images/charizard.jpg";
        } else if (button.id === "snorlax") {
            title = "Snorlax";
            content = ["Snorlax is a Normal-type Pokémon.", "It is known for its huge appetite and sleeping habit."];
        }
        
        // customize modal content
        customizeModal(title, content);
        
        // open the modal
        openModal();
    });
});

// event listener to close button
closeButton.addEventListener("click", closeModal);

// calling the customized modal 
customizeModal("New Title", ["New content paragraph 1", "New content paragraph 2"], "path/to/your/image.jpg");

