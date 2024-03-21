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

//for pokemon modal customization
const modalTitle = modal.querySelector("h2");
const modalContent = modal.querySelectorAll("p");
const modalImage = modal.querySelector(".modal-image");
const modalDate = modal.querySelector("h3"); 

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
function customizeModal(title, content, imageUrl, date, audioUrl) {
    modalTitle.textContent = title;
    modalDate.textContent = date;
    modalContent.forEach((p, index) => {
        p.textContent = content[index];
    modalImage.src = imageUrl;
    // Play the audio when the modal opens
    playAudio(audioUrl);
    });
}

//audio
const audioElement = document.getElementById('audio');

// function to play audio
function playAudio(audioUrl) {
    audioElement.src = audioUrl;
    audioElement.play();
}

//event listeners to open buttons
openButtons.forEach(button => {
    button.addEventListener("click", () => {
        // customize modal content based on button clicked
        let title = "Default Title";
        let content = ["Default content paragraph 1", "Default content paragraph 2"];
        let imageUrl = "default-image-url.jpg";
        let date = "Default date";
        let audioUrl = "";

        // customization based on button IDs
        if (button.id === "charizard") {
            title = "It's Charizard!";
            content = ["You are confident and ambitious, and you set the trail ablaze behind you wherever you go. You may be occasionally impatient and stubborn- you’re not exactly everyone’s cup of tea- but you are warm-hearted nonetheless."];
            imageUrl = "/images/mega_char-min.png";
            date = "March 21 – April 19"
            audioUrl = "/audios/charizard-audio.mp3";
        } else if (button.id === "snorlax") {
            title = "It's Snorlax!";
            content = ["You are laidback and pragmatic. You take life one step at a time with a nap to compensate for every five or so steps. You can be quite lazy and keep mostly to yourself, but everyone loves how easy you are to get along with."];
            imageUrl = "/images/snorlax-min.png";
            date = "April 20 – May 20";
            audioUrl = "/audios/snorlax-audio.mp3";
        } else if (button.id === "ditto") {
            title = "It's Ditto!";
            content = ["You are curious and playful, and you bring a unique and uplifting energy to the room. Although you may seem a bit fickle and indecisive, at the end of the day, all you seek is to please. Be true to yourself."];
            imageUrl = "/images/ditto-min.png";
            date = "May 21 – June 20";
            audioUrl = "/audios/ditto-audio.mp3";
        } else if (button.id === "toegepi") {
            title = "It's Toegepi!";
            content = ["You are intuitive and emotional, and while others might see emotion as a weakness, it is your greatest strength. You are deeply attuned to your emotions, and thus, can spare the effort to help others with theirs. Be careful not to take on more than you can bite."];
            imageUrl = "/images/toegepi-min.png";
            date = "June 21 – July 22";
            audioUrl = "/audios/toegepi-audio.mp3";
        } else if (button.id === "arcanine") {
            title = "It's Arcanine!";
            content = ["You are magnetic and loyal. Your essence beckons for attention, after all, you’re a performer! Whether it is on stage or behind the scenes, you were born to shine. Remember not to get too caught up in the lights and share your charm with others."];
            imageUrl = "/images/arcanine-min.png";
            date = "July 23 – August 22";
            audioUrl = "/audios/arcanine-audio.mp3";
        } else if (button.id === "alakazam") {
            title = "It's Alakazam!";
            content = ["You are the world’s best older sibling, reliable and logical. People trust you to give honest, objective, and solid advice. You are constantly helping others grow. Allow yourself the same grace and don’t be so harsh on yourself."];
            imageUrl = "/images/alakazam-min.png";
            date = "August 23 – September 22";
            audioUrl = "/audios/alakazam-audio.mp3";
        } else if (button.id === "bulbasaur") {
            title = "It's Bulbasaur!";
            content = ["You are a well-balanced individual with a strong strive for harmony. People respect you for your ability to stand on business and dissolve conflict and disarray. While your diplomacy is admirable, have a little more trust in other people to resolve their own problems."];
            imageUrl = "/images/bulbasaur2-min.png";
            date = "September 23 – October 22";
            audioUrl = "/audios/bulbasaur-audio.mp3";
        } else if (button.id === "cubone") {
            title = "It's Cubone!";
            content = ["You are mysterious and ambitious. Your confidence and strive to always be the best version of yourself draws people in. You know exactly what you want and you go straight for it. Make sure you slow down and take some breaks!"];
            imageUrl = "/images/cubone-min.png";
            date = "October 23 – November 21";
            audioUrl = "/audios/cubone-audio.mp3";
        } else if (button.id === "squirtle") {
            title = "It's Squirtle!";
            content = ["You are exciting and brazen. Your authenticity and bravery are contagious, and you inspire others to go after the things that they want! Your rampant optimism can sometimes be a bit overwhelming for others, but it works perfectly for you."];
            imageUrl = "/images/squirtle-min.png";
            date = "November 22 – December 21";
            audioUrl = "/audios/squirtle-audio.mp3";
        } else if (button.id === "vaporeon") {
            title = "It's Vaporeon!";
            content = ["You are disciplined and grounded. You easily distinguish the line between fantasy and reality, and you help guide others back to the sweet spot between the two. Try not to take everything too seriously, the world will be just fine if you have some fun!"];
            imageUrl = "/images/vaporeon-min.png";
            date = "December 22 – January 19";
            audioUrl = "/audios/vaporeon-audio.mp3";
        } else if (button.id === "mew") {
            title = "It's Mew!";
            content = ["You are individualistic and philosophical. You ask the questions that others might avoid, and you embrace the weird and new. While your reclusive nature can drive others away, it also leaves a great air of intrigue around you."];
            imageUrl = "/images/mew-min.png";
            date = "January 20 - February 18";
            audioUrl = "/audios/mew-audio.mp3";
        } else if (button.id === "jigglypuff") {
            title = "It's Jigglypuff!";
            content = ["You are the gentle artists of the world, creative and healing with a great yearning for something bigger than yourself. As highly empathetic individuals, you find yourself as people’s safety net. Make sure you find yours too. It’s okay to ask for help."];
            imageUrl = "/images/Jigglypuff-min.png";
            date = "February 19 - March 20";
            audioUrl = "/audios/jigglypuff-audio.mp3";
        }
    
        // customize modal content
        customizeModal(title, content, imageUrl, date, audioUrl);
        
        // open the modal
        openModal();
    });
});

// event listener to close button
closeButton.addEventListener("click", closeModal);

// calling the customized modal 
customizeModal("New Title", ["New content paragraph 1", "New content paragraph 2"], "path/to/your/image.jpg");

//calendar 

// event listener for the ENTER button
const enterButton = document.getElementById('enter');
enterButton.addEventListener('click', () => {
    // get the selected date from the calendar input
    const selectedDate = new Date(document.getElementById('calendar-dropdown').value);
    
    // Extract month and day from the selected date
    const month = selectedDate.getMonth() + 1; // Months are zero-indexed, so add 1
    const day = selectedDate.getDate();

    // Determine the astrological sign based on the selected date
    let astrological_sign;
    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        astrological_sign = 'vaporeon';
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        astrological_sign = 'squirtle';
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        astrological_sign = 'cubone';
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        astrological_sign = 'bulbasaur';
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        astrological_sign = 'alakazam ';
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        astrological_sign = 'arcanine';
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        astrological_sign = 'toegepi';
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        astrological_sign = 'ditto';
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        astrological_sign = 'snorlax';
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        astrological_sign = 'charizard';
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        astrological_sign = 'jigglypuff';
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        astrological_sign = 'mew';
    }

    // Open the corresponding Pokémon modal based on the astrological sign
    const correspondingButton = document.getElementById(astrological_sign.toLowerCase());
    setTimeout(() => {
        correspondingButton.click(); // Simulate click on the corresponding Pokémon button
    }, 100);
    // correspondingButton.click(); // Simulate click on the corresponding Pokémon button
});

/*const enter = document.querySelector('.enter');
const dateInput = document.querySelector('.calendar-dropdown');

const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-button');

enter.addEventListener('click', function () {
    const birthday = new Date(dateInput.value);
    const month = birthday.getMonth() + 1;
    const day = birthday.getDate();
    modal.style.visibility = "visible";

    let pokemonId = ''; 

    if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        pokemonId = 'vaporeon'; // Aquarius corresponds to Vaporeon
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        pokemonId = 'squirtle'; // Sagittarius corresponds to Squirtle
    } else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
        pokemonId = 'cubone'; // Scorpio corresponds to Cubone
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
        pokemonId = 'bulbasaur'; // Libra corresponds to Bulbasaur
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        pokemonId = 'alakazam'; // Virgo corresponds to Alakazam
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        pokemonId = 'arcanine'; // Leo corresponds to Arcanine
    } else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
        pokemonId = 'toegepi'; // Cancer corresponds to Toegepi
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
        pokemonId = 'ditto'; // Gemini corresponds to Ditto
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        pokemonId = 'snorlax'; // Taurus corresponds to Snorlax
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        pokemonId = 'charizard'; // Aries corresponds to Charizard
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        pokemonId = 'jigglypuff'; // Pisces corresponds to Jigglypuff
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        pokemonId = 'mew'; // Aquarius corresponds to Mew
    }

    if (pokemonId) {
        const pokemonButton = document.getElementById(pokemonId);
        if (pokemonButton) {
            pokemonButton.click();
        } else {
            console.error('Pokémon button not found for the selected astrological sign.');
        }
    } else {
        console.error('No Pokémon found for the selected astrological sign.');
    }
});

// need to make an error popup?
*/