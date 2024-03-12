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
const modalDate = modal.querySelector("h3"); //date

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
function customizeModal(title, content, imageUrl, date) {
    modalTitle.textContent = title;
    modalDate.textContent = date; //date
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
        let date = "Default date"; //date

        // customization based on button IDs
        if (button.id === "charizard") {
            title = "It's Charizard!";
            content = ["You are confident and ambitious, and you set the trail ablaze behind you wherever you go. You may be occasionally impatient and stubborn- you’re not exactly everyone’s cup of tea- but you are warm-hearted nonetheless."];
            imageUrl = "/images/mega_char-min.png";
            date = "March 21 – April 19"
        } else if (button.id === "snorlax") {
            title = "It's Snorlax!";
            content = ["You are laidback and pragmatic. You take life one step at a time with a nap to compensate for every five or so steps. You can be quite lazy and keep mostly to yourself, but everyone loves how easy you are to get along with."];
            imageUrl = "/images/snorlax-min.png";
            date = "April 20 – May 20";
        } else if (button.id === "ditto") {
            title = "It's Ditto!";
            content = ["You are curious and playful, and you bring a unique and uplifting energy to the room. Although you may seem a bit fickle and indecisive, at the end of the day, all you seek is to please. Be true to yourself."];
            imageUrl = "/images/ditto-min.png";
            date = "May 21 – June 20";
        } else if (button.id === "toegepi") {
            title = "It's Toegepi!";
            content = ["You are intuitive and emotional, and while others might see emotion as a weakness, it is your greatest strength. You are deeply attuned to your emotions, and thus, can spare the effort to help others with theirs. Be careful not to take on more than you can bite."];
            imageUrl = "/images/toegepi-min.png";
            date = "June 21 – July 22";
        } else if (button.id === "arcanine") {
            title = "It's Arcanine!";
            content = ["You are magnetic and loyal. Your essence beckons for attention, after all, you’re a performer! Whether it is on stage or behind the scenes, you were born to shine. Remember not to get too caught up in the lights and share your charm with others."];
            imageUrl = "/images/arcanine-min.png";
            date = "July 23 – August 22";
        } else if (button.id === "alakazam") {
            title = "It's Alakazam!";
            content = ["You are the world’s best older sibling, reliable and logical. People trust you to give honest, objective, and solid advice. You are constantly helping others grow. Allow yourself the same grace and don’t be so harsh on yourself."];
            imageUrl = "/images/alakazam-min.png";
            date = "August 23 – September 22";
        } else if (button.id === "bulbasaur") {
            title = "It's Bulbasaur!";
            content = ["You are a well-balanced individual with a strong strive for harmony. People respect you for your ability to stand on business and dissolve conflict and disarray. While your diplomacy is admirable, have a little more trust in other people to resolve their own problems."];
            imageUrl = "/images/bulbasaur2-min.png";
            date = "September 23 – October 22";
        } else if (button.id === "cubone") {
            title = "It's Cubone!";
            content = ["You are mysterious and ambitious. Your confidence and strive to always be the best version of yourself draws people in. You know exactly what you want and you go straight for it. Make sure you slow down and take some breaks!"];
            imageUrl = "/images/cubone-min.png";
            date = "October 23 – November 21";
        } else if (button.id === "squirtle") {
            title = "It's Squirtle!";
            content = ["You are exciting and brazen. Your authenticity and bravery are contagious, and you inspire others to go after the things that they want! Your rampant optimism can sometimes be a bit overwhelming for others, but it works perfectly for you."];
            imageUrl = "/images/squirtle-min.png";
            date = "November 22 – December 21";
        } else if (button.id === "vaporeon") {
            title = "It's Vaporeon!";
            content = ["You are disciplined and grounded. You easily distinguish the line between fantasy and reality, and you help guide others back to the sweet spot between the two. Try not to take everything too seriously, the world will be just fine if you have some fun!"];
            imageUrl = "/images/vaporeon-min.png";
            date = "December 22 – January 19";
        } else if (button.id === "mew") {
            title = "It's Mew!";
            content = ["You are individualistic and philosophical. You ask the questions that others might avoid, and you embrace the weird and new. While your reclusive nature can drive others away, it also leaves a great air of intrigue around you."];
            imageUrl = "/images/mew-min.png";
            date = "January 20 - February 18";
        } else if (button.id === "jigglypuff") {
            title = "It's Jigglypuff!";
            content = ["You are the gentle artists of the world, creative and healing with a great yearning for something bigger than yourself. As highly empathetic individuals, you find yourself as people’s safety net. Make sure you find yours too. It’s okay to ask for help."];
            imageUrl = "/images/Jigglypuff-min.png";
            date = "February 19 - March 20";
        }
    
        // customize modal content
        customizeModal(title, content, imageUrl, date);
        
        // open the modal
        openModal();
    });
});

// event listener to close button
closeButton.addEventListener("click", closeModal);

// calling the customized modal 
customizeModal("New Title", ["New content paragraph 1", "New content paragraph 2"], "path/to/your/image.jpg");

//calendar 
//const submit = document.querySelector('.enter');
//const dateInput = document.querySelector('.calendar-dropdown');
//const popup = document.getElementById('modal');
//const closeBtn = document.querySelector('.close-button');

