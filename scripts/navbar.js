//the following is toggle the navbar menu for screen resolutions

// getting the ham bars and times element

const bars = document.getElementById("ham-bars");
const times = document.getElementById("ham-times");


bars.addEventListener('click', (e) => {
    e.preventDefault();
    bars.classList.add('close'); // Hide the hamburger icon
    times.classList.remove('close'); // Show the close icon
});

// Close menu click event
times.addEventListener('click', (e) => {
    e.preventDefault();
    times.classList.add('close'); // Hide the close icon
    bars.classList.remove('close');
     // Show the hamburger icon
});