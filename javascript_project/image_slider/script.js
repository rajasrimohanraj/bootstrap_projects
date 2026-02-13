// document.addEventListener("DOMContentLoaded", () => {
//     const slider = document.querySelector(".slider");
//     const slides = document.querySelectorAll(".slide");
//     const prevBtn = document.querySelector(".prev");
//     const nextBtn = document.querySelector(".next");
//     const dotContainer = document.querySelector(".dot-container");

//     let currentSlide = 0;
//     const slideCount = slides.length;

//     // Create dots
//     slides.forEach((_, index) => {
//         const dot = document.createElement("div");
//         dot.classList.add("dot");
//         if (index === 0) dot.classList.add("active");
//         dot.addEventListener("click", () => goToSlide(index));
//         dotContainer.appendChild(dot);
//     });

//     const dots = document.querySelectorAll(".dot");

//     function updateDots() {
//         dots.forEach((dot, index) => {
//             dot.classList.toggle("active", index === currentSlide);
//         });
//     }

//     function goToSlide(index) {
//         currentSlide = index;
//         slider.style.transform = `translateX(-${currentSlide * 100}%)`;
//         updateDots();
//     }

//     function nextSlide() {
//         currentSlide = (currentSlide + 1) % slideCount;
//         goToSlide(currentSlide);
//     }

//     function prevSlide() {
//         currentSlide = (currentSlide - 1 + slideCount) % slideCount;
//         goToSlide(currentSlide);
//     }

//     nextBtn.addEventListener("click", nextSlide);
//     prevBtn.addEventListener("click", prevSlide);

//     setInterval(nextSlide, 5000);
// });
document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const dotcontainer = document.querySelector(".dot-container");

    let currentSlide = 0;
    const slideCount = slides.length;

    slides.forEach((_, index) => {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotcontainer.appendChild(dot);
    });
    const dots = document.querySelectorAll(".dot")

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlide);
        })
    }
    function goToSlide(index) {
        currentSlide = index;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slideCount;
        goToSlide(currentSlide);
    }
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        goToSlide(currentSlide);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);


    setInterval(nextSlide,5000);

});