document.getElementById('dropdownBtn').addEventListener('click', function (e) {
    e.preventDefault();
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

const dishImage = document.getElementById('dishImage');
let direction = 1;
let topPosition = 0;

setInterval(() => {
    if (topPosition > 10 || topPosition < 0) {
        direction *= -1;
    }
    topPosition += direction;
    dishImage.style.transform = `translateY(${topPosition}px)`;
}, 50);

// --Go to top button
const goToTopBtn = document.getElementById('goToTopBtn');

// Show the button when scrolling down 100px from the top
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goToTopBtn.classList.add('show');
    } else {
        goToTopBtn.classList.remove('show');
    }
};

// Scroll to the top when clicked
goToTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ---------------------------first image slider
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });
})
// -------------second image sliding--------
document.addEventListener("DOMContentLoaded", function () {
    var swiperSecondary = new Swiper('.swiper-container-secondary', {
        slidesPerView: 3, 
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
        loop: true,
    });
});

// --------------sidebar-------------------
function openSidebar(sidebarId) {
    const sidebar = document.getElementById(sidebarId);
    sidebar.classList.add('open');
}

// function closeSidebar(sidebarId) {
//     const sidebar = document.getElementById(sidebarId);
//     sidebar.classList.remove('open');
// }

// ----------------------------------------
const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const pagination = document.querySelectorAll(".pagination-circle");
const slideWidth = slides[0].offsetWidth + 10;
let currentIndex = 2; 

// Function to update slide position
function updateSlider() {
    const offset = -((currentIndex - 2) * slideWidth);
    sliderWrapper.style.transform = `translateX(${offset}px)`;

    // Update pagination active state
    pagination.forEach((circle, index) => {
        circle.classList.toggle("active", index === currentIndex);
    });
}

// Automatic slider function
function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

let slideInterval = setInterval(autoSlide, 3000); // Slide every 3 seconds

// Manual slider via pagination
pagination.forEach((circle, index) => {
    circle.addEventListener("click", () => {
        clearInterval(slideInterval); 
        currentIndex = index;
        updateSlider();
        slideInterval = setInterval(autoSlide, 1000); // Restart auto-sliding
    });
});

// Initial setup
updateSlider();


// -----------------------------------------