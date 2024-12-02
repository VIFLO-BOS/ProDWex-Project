

//the following is toggle the navbar menu for screen resolutions

// getting the ham bars and times element

const bars = document.getElementById("ham-bars");
const time = document.getElementById("ham-time");
const dropdownCtn = document.querySelector(".dropdown-ctn");

console.log(dropdownCtn)



bars.addEventListener('click', () => {
    dropdownCtn.classList.add('open')
    bars.classList.add('close');
})


time.addEventListener('click', () => {
    dropdownCtn.classList.remove('open');
    bars.classList.remove('close');
})

//  the following is for the hero-header text animations
const heroTxt = 'Professional Development & Work Experience - ProDWex';
const heroEL = document.getElementById('hero-hdr');
window.addEventListener('load', () => {
    let i = 0;
    setInterval(() => {
        if (i < heroTxt.length) {
            heroEL.innerHTML += heroTxt.charAt(i);
            i++
        }
    }, 50)
})




// the following is for the course header animation
const hdrTxt = 'Build your confidence and shape your future by advancing your skills through professional development today';
const courseHeader = document.getElementById('crse-hdr');
let index = 0;  // Track the character index
    setInterval(() => {
        if (index < hdrTxt.length) {
            courseHeader.innerHTML += hdrTxt.charAt(index);  // Add one character at a time
            index++;  // Move to the next character
        }
    }, 100);  // Adjust speed by changing the interval (100ms)










