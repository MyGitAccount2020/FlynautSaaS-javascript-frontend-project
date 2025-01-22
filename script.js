// -------navbar----
// Toggle menu visibility on hamburger click
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});

// Close menu when close button is clicked
document.querySelector('.close-btn').addEventListener('click', function () {
    document.querySelector('.navbar').classList.remove('active');
});

// -------------------

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

// ---------------------------first image slider-testnomial
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.unique-swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.unique-swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
    });
})


// ------------- wedding sliding--------
document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper('.swiper-container-secondary', {
        slidesPerView: 1,
        spaceBetween: 30,
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
        breakpoints: {
            el: '.swiper-pagination',
            500: {
                slidesPerView: 3,
                spaceBetween: 1,
            }
        }
    });
});

// --------------sidebar-------------------
function openSidebar(sidebarId) {
    const sidebar = document.getElementById(sidebarId);
    sidebar.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeSidebar(sidebarId) {
    const sidebar = document.getElementById(sidebarId);
    sidebar.classList.remove('open');
    document.body.style.overflow = '';
}


// ----------------------------------------
const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const pagination = document.querySelectorAll(".pagination-circle");

let slideWidth = slides[0].offsetWidth + 10; // Initialize slide width
let currentIndex = window.innerWidth >= 768 ? 2 : 0; // Start at the middle for desktop, first for mobile

function updateSlider() {
    // Adjust the offset based on the current index and viewport size
    const offset = window.innerWidth >= 768
        ? -((currentIndex - 2) * slideWidth) // Center 3rd slide for desktop
        : -(currentIndex * slideWidth); // Center 1st slide for mobile
    sliderWrapper.style.transform = `translateX(${offset}px)`;

    // Highlight the active slide
    slides.forEach((slide, index) => {
        slide.classList.toggle("active", index === currentIndex);
    });

    // Update pagination
    pagination.forEach((circle, index) => {
        circle.classList.toggle("active", index === currentIndex);
    });
}

// Automatically slide through images
function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

let slideInterval = setInterval(autoSlide, 3000);

// Manual navigation via pagination
pagination.forEach((circle, index) => {
    circle.addEventListener("click", () => {
        clearInterval(slideInterval);
        currentIndex = index;
        updateSlider();
        slideInterval = setInterval(autoSlide, 3000);
    });
});

window.addEventListener("resize", () => {
    slideWidth = slides[0].offsetWidth + 10;
    currentIndex = window.innerWidth >= 768 ? 2 : 0;
    updateSlider();
});

// Initial setup
updateSlider();
// ------------horizontal scrolling disable-----------
window.addEventListener("resize", () => {
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
});
