/* =========================================================
   VAIDESH IT SOLUTIONS
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".info-card, .catalog-card, .contact-card, .section-heading, .hero-text, .hero-card, .cta-content"
    );

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entries, observerInstance) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("reveal-visible");

                        observerInstance.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -30px 0px"
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


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const navLinks = document.querySelectorAll(".nav-links a");

    const sections = document.querySelectorAll(
        "main section[id]"
    );

    function updateActiveNavigation() {

        let currentSection = "home";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 140;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }

        });

        navLinks.forEach((link) => {

            const href = link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );

    updateActiveNavigation();


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const navContainer =
        document.querySelector(".nav-container");

    const nav =
        document.querySelector(".nav-links");

    if (navContainer && nav) {

        const menuButton =
            document.createElement("button");

        menuButton.className =
            "mobile-menu-button";

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        navContainer.appendChild(menuButton);


        menuButton.addEventListener("click", () => {

            const isOpen =
                nav.classList.toggle("mobile-open");

            menuButton.classList.toggle(
                "open",
                isOpen
            );

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        nav.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove(
                    "mobile-open"
                );

                menuButton.classList.remove(
                    "open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });


        document.addEventListener("click", (event) => {

            if (
                !nav.contains(event.target) &&
                !menuButton.contains(event.target)
            ) {

                nav.classList.remove(
                    "mobile-open"
                );

                menuButton.classList.remove(
                    "open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        });

    }


    /* =====================================================
       SMOOTH INTERNAL LINKS
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId =
                link.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
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


    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            () => {

                const submitButton =
                    contactForm.querySelector(
                        ".form-submit"
                    );

                if (submitButton) {

                    submitButton.textContent =
                        "Sending...";

                    submitButton.disabled =
                        true;

                }

            }
        );

    }


    /* =====================================================
       PRODUCT CARD HOVER
    ===================================================== */

    const cards =
        document.querySelectorAll(
            ".catalog-card"
        );

    cards.forEach((card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.setProperty(
                    "--card-hover",
                    "1"
                );

            }
        );

        card.addEventListener(
            "mouseleave",
            () => {

                card.style.setProperty(
                    "--card-hover",
                    "0"
                );

            }
        );

    });


    /* =====================================================
       WHATSAPP BUTTON
    ===================================================== */

    const whatsappButton =
        document.querySelector(
            ".whatsapp-float"
        );

    if (whatsappButton) {

        whatsappButton.addEventListener(
            "click",
            () => {

                /*
                    WhatsApp opens through the normal
                    browser/app behavior.
                */

            }
        );

    }


    /* =====================================================
       BACK TO TOP
       Creates the button automatically.
    ===================================================== */

    const backToTop =
        document.createElement("button");

    backToTop.className =
        "back-to-top";

    backToTop.setAttribute(
        "aria-label",
        "Back to top"
    );

    backToTop.innerHTML = "↑";

    document.body.appendChild(backToTop);


    const backToTopStyle =
        document.createElement("style");

    backToTopStyle.textContent = `
        .back-to-top {
            position: fixed;
            right: 25px;
            bottom: 95px;
            z-index: 998;
            width: 42px;
            height: 42px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255,255,255,0.10);
            border-radius: 50%;
            background: rgba(8,20,35,0.90);
            color: #dbeafe;
            font-size: 1.1rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.25s ease;
            backdrop-filter: blur(12px);
        }

        .back-to-top.show {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .back-to-top:hover {
            background: #2563eb;
            border-color: #3b82f6;
            transform: translateY(-3px);
        }

        @media (max-width: 760px) {
            .back-to-top {
                right: 18px;
                bottom: 82px;
                width: 40px;
                height: 40px;
            }
        }
    `;

    document.head.appendChild(
        backToTopStyle
    );


    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 500) {

                backToTop.classList.add(
                    "show"
                );

            } else {

                backToTop.classList.remove(
                    "show"
                );

            }

        },
        { passive: true }
    );


    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* =====================================================
       IMAGE FALLBACK
       Prevents broken brand images from looking ugly.
    ===================================================== */

    document.querySelectorAll(
        ".brand-logo-box img"
    ).forEach((image) => {

        image.addEventListener(
            "error",
            () => {

                image.style.display =
                    "none";

                const parent =
                    image.parentElement;

                if (parent) {

                    parent.classList.add(
                        "image-error"
                    );

                }

            }
        );

    });


    /* =====================================================
       PREVENT DOUBLE FORM SUBMISSIONS
    ===================================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            () => {

                const button =
                    contactForm.querySelector(
                        ".form-submit"
                    );

                if (!button) return;

                button.dataset.originalText =
                    button.textContent;

                button.textContent =
                    "Sending...";

                button.style.opacity =
                    "0.7";

                button.style.cursor =
                    "wait";

            },
            { once: false }
        );

    }


    /* =====================================================
       PAGE READY
    ===================================================== */

    document.body.classList.add(
        "page-ready"
    );

});
