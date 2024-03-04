//zodiac calendar function 
if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
  astrological_sign = 'Capricorn'
} else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
  astrological_sign = 'Sagittarius'
} else if ((month === 10 && day >= 24) || (month === 11 && day <= 21)) {
  astrological_sign = 'Scorpio'
} else if ((month === 9 && day >= 23) || (month === 10 && day <= 23)) {
  astrological_sign = 'Libra'
} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
  astrological_sign = 'Virgo'
} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
  astrological_sign = 'Leo'
} else if ((month === 6 && day >= 22) || (month === 7 && day <= 22)) {
  astrological_sign = 'Cancer'
} else if ((month === 5 && day >= 21) || (month === 6 && day <= 21)) {
  astrological_sign = 'Gemini'
} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
  astrological_sign = 'Taurus'
} else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
  astrological_sign = 'Aries'
} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
  astrological_sign = 'Pisces'
} else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
  astrological_sign = 'Aquarius'
}

/*const openBtn = document.getElementById ("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById ("modal")

openBtn.addEventListener("click", ()=> {
  modal.classList.add("open");
});

closeBtn.addEventListener("click", ()=> {
  modal.classList.remove("open");
})*/
const charizard = document.getElementById('charizard-open');

const modal = document.querySelector("#modal");
const openModal = document.querySelector(".charizard-open");
const closeModal = document.querySelector(".charizard-close");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
