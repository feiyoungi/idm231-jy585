const modal = document.getElementById("#modal");
const charizardButton = document.getElementById("charizard-open");
const snorlaxButton = document.getElementById("snorlax-open");
const closeModal = document.querySelector(".close-button");

// Function to update modal content

function updateModalContent(title, description, imageSrc) {
  const modalTitle = modal.querySelector("h2");
  const modalDescription = modal.querySelector("p");
  const modalImage = pokemon.querySelector(".pokemon-image");

  modalTitle.textContent = title;
  modalDescription.textContent = description;
  modalImage.src = imageSrc;
}

// Buttons 

charizardButton.addEventListener("click", () => {
    const title = "Charizard";
    const description = "You are confident and ambitious, and you set the trail ablaze behind you wherever you go. You may be occasionally impatient and stubborn- you’re not exactly everyone’s cup of tea- but you are warm-hearted nonetheless.";
    const imageSrc = "/images/mega_char-min.png";

    updateModalContent(title, description, imageSrc);
    modal.setAttribute('open', 'true'); // Open modal
});

snorlaxButton.addEventListener("click", () => {
    const title = "Snorlax";
    const description = "You are relaxed and laid-back, preferring to spend your days sleeping and eating. You may come across as lazy to some, but you simply enjoy taking things slow and savoring life’s simple pleasures.";
    const imageSrc = "/images/snorlax-min.png";

    updateModalContent(title, description, imageSrc);
    modal.setAttribute('open', 'true'); // Open modal
});

// Close button 

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
