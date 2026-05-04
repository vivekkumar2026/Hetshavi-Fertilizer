document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if(btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Sticky Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shadow-md', 'glass');
            header.classList.remove('bg-transparent');
        } else {
            header.classList.remove('shadow-md', 'glass');
            header.classList.add('bg-transparent');
        }
    });

    // Accordion for FAQ
    const accordions = document.querySelectorAll('.accordion-header');
    accordions.forEach(acc => {
        acc.addEventListener('click', function() {
            this.classList.toggle('active');
            const icon = this.querySelector('i');
            if (this.classList.contains('active')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });

    // Hero Slider
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        
        function showSlide(index) {
            slides.forEach(slide => {
                slide.style.opacity = '0';
                slide.classList.remove('z-10');
                slide.classList.add('z-0');
            });
            slides[index].style.opacity = '1';
            slides[index].classList.remove('z-0');
            slides[index].classList.add('z-10');
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        const nextBtn = document.getElementById('slider-next');
        const prevBtn = document.getElementById('slider-prev');

        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        // Initial setup
        showSlide(currentSlide);
        setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
});

// WhatsApp Enquiry Function
window.enquireWhatsApp = function(productName) {
    const phoneNumber = "919714629090"; // Replace with your actual number
    const message = `Hello, I am interested in ${productName}. Please share details and price.`;
    const url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, '_blank');
};
