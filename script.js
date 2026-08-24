// ================================
// VAIDESH IT SOLUTIONS
// Website JavaScript
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // -------------------------------
    // Scroll Reveal Animation
    // -------------------------------

    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    // -------------------------------
    // Smooth Navigation
    // -------------------------------

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // -------------------------------
    // Navbar Scroll Effect
    // -------------------------------

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 50) {
            navbar.style.background = "rgba(7, 11, 20, 0.92)";
        } else {
            navbar.style.background = "rgba(7, 11, 20, 0.7)";
        }

    });


    // -------------------------------
    // Animated Counters
    // -------------------------------

    const counters = document.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;
                const target = Number(counter.dataset.target);

                let current = 0;

                const duration = 1500;
                const startTime = performance.now();

                function updateCounter(currentTime) {

                    const progress = Math.min(
                        (currentTime - startTime) / duration,
                        1
                    );

                    current = Math.floor(
                        progress * target
                    );

                    counter.textContent = current;

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }

                }

                requestAnimationFrame(updateCounter);

                observer.unobserve(counter);

            });

        },
        {
            threshold: 0.7
        }
    );

    counters.forEach((counter) => {
        counterObserver.observe(counter);
    });


    // -------------------------------
    // Current Year
    // -------------------------------

    const yearElement = document.querySelector("#year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // -------------------------------
    // Mobile Menu
    // -------------------------------

    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-open");

        });

        navLinks.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {
                navLinks.classList.remove("mobile-open");
            });

        });

    }


    // -------------------------------
    // Contact Form
    // -------------------------------

    const contactForm = document.querySelector("#contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", (event) => {

            event.preventDefault();

            const name = contactForm.querySelector(
                '[name="name"]'
            )?.value;

            const message = contactForm.querySelector(
                '[name="message"]'
            )?.value;

            if (!name || !message) {
                alert("Please fill in all required fields.");
                return;
            }

            const whatsappMessage =
                `Hello Vaidesh IT Solutions,%0A%0A` +
                `Name: ${encodeURIComponent(name)}%0A` +
                `Message: ${encodeURIComponent(message)}`;

            const whatsappURL =
                `https://wa.me/9191730338909?text=${whatsappMessage}`;

            window.open(whatsappURL, "_blank");

        });

    }

});
