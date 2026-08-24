/* =========================================
   VAIDESH IT SOLUTIONS
   MAIN JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       SCROLL REVEAL ANIMATION
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".info-card, .catalog-card, .product-item, .contact-card, .section-heading, .hero-text, .hero-card"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("reveal-visible");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach((element) => {

            element.classList.add("reveal");

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {
            element.classList.add("reveal-visible");
        });

    }


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {

        const linkPage =
            link.getAttribute("href").split("/").pop();

        if (linkPage === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });


    /* =========================================
       MOBILE MENU
    ========================================= */

    const navContainer =
        document.querySelector(".nav-container");

    const nav =
        document.querySelector(".nav-links");

    if (navContainer && nav) {

        const menuButton =
            document.createElement("button");

        menuButton.className = "mobile-menu-button";

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuButton.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        navContainer.appendChild(menuButton);


        menuButton.addEventListener("click", () => {

            nav.classList.toggle("mobile-open");

            menuButton.classList.toggle("open");

        });


        nav.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("mobile-open");

                menuButton.classList.remove("open");

            });

        });

    }


    /* =========================================
       SMOOTH INTERNAL LINKS
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================
       CONTACT FORM
    ========================================= */

    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", () => {

            const submitButton =
                contactForm.querySelector(".form-submit");

            if (submitButton) {

                submitButton.textContent =
                    "Sending...";

                submitButton.disabled = true;

            }

        });

    }


    /* =========================================
       PRODUCT CARD HOVER EFFECT
    ========================================= */

    const cards =
        document.querySelectorAll(".catalog-card");

    cards.forEach((card) => {

        card.addEventListener("mouseenter", () => {

            card.style.setProperty(
                "--card-hover",
                "1"
            );

        });

        card.addEventListener("mouseleave", () => {

            card.style.setProperty(
                "--card-hover",
                "0"
            );

        });

    });


    /* =========================================
       BACK TO TOP
    ========================================= */

    const backToTop =
        document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }

});
