// -------navbar----
// Toggle menu visibility on hamburger click
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Close menu when close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
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
    document.body.style.overflow = ''; // Restore scrolling
}


// ----------------------------------------
const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");
const pagination = document.querySelectorAll(".pagination-circle");
const slideWidth = slides[0].offsetWidth + 10;
let currentIndex = 2; 


function updateSlider() {
    const offset = -((currentIndex - 2) * slideWidth);
    sliderWrapper.style.transform = `translateX(${offset}px)`;


    pagination.forEach((circle, index) => {
        circle.classList.toggle("active", index === currentIndex);
    });
}

// Automatic slider function
function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

let slideInterval = setInterval(autoSlide, 3000); 

// Manual slider via pagination
pagination.forEach((circle, index) => {
    circle.addEventListener("click", () => {
        clearInterval(slideInterval); 
        currentIndex = index;
        updateSlider();
        slideInterval = setInterval(autoSlide, 1000);
    });
});

// Initial setup
updateSlider();


// -----------------------------------------
