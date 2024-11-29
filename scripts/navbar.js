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


console.log(window.scrollY)



// this is to listen to the window event for some animation efffect

const hrhead = document.getElementById('hero-heading');
const hrsub = document.getElementById('hero-subheading');
const hrbtn = document.getElementById('hero-btn');

// Listen for the scroll event
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY; // Get the vertical scroll position

    // Check if the scroll position reaches a certain point
    if (scrollPosition > 100) {
        hrhead.style.transition = 'all 3s ease-in-out';
        hrhead.style.opacity = '1'; // Ensure the element appears
    }

    if (scrollPosition > 200) {
        hrsub.style.transition = 'all 3s ease-in-out';
        hrsub.style.opacity = '1';
    }

    if (scrollPosition > 300) {
        hrbtn.style.transition = 'all 3s ease-in-out';
        hrbtn.style.opacity = '1';
    }
});

