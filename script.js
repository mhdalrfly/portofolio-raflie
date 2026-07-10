/* =========================
   LOADING SCREEN
========================= */

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("loader").style.display = "none";
        }, 500);

    }, 1500);
});


/* =========================
   TYPING ANIMATION
========================= */

const texts = [
    "Database Enthusiast",
    "Network Administrator",
    "Software Developer"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeAnimation() {

    const typing = document.getElementById("typing");

    if (!typing) return;

    const currentText = texts[textIndex];

    if (!deleting) {
        typing.textContent =
            currentText.substring(0, charIndex);

        charIndex++;
    } else {
        typing.textContent =
            currentText.substring(0, charIndex);

        charIndex--;
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex > currentText.length) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        textIndex++;

        if (textIndex >= texts.length) {
            textIndex = 0;
        }
    }

    setTimeout(typeAnimation, speed);
}

typeAnimation();


/* =========================
   HAMBURGER MENU
========================= */

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

}


/* =========================
   DARK / LIGHT MODE
========================= */

const themeButton =
    document.getElementById("theme");

if (themeButton) {

    themeButton.addEventListener("click", () => {

        document.body.classList.toggle("light");

        if (
            document.body.classList.contains(
                "light"
            )
        ) {
            themeButton.innerHTML = "☀️";
        } else {
            themeButton.innerHTML = "🌙";
        }

    });

}


/* =========================
   HOVER CARD EFFECT
========================= */

const cards =
    document.querySelectorAll(
        ".project-card, .stat-card, .timeline div"
    );

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px)";

        card.style.transition =
            ".3s";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0)";

    });

});


/* =========================
   ANIMASI SAAT SCROLL
========================= */

const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add(
                        "show"
                    );
                }

            });

        },

        {
            threshold: 0.2
        }

    );

const hiddenElements =
    document.querySelectorAll(
        "section, .project-card, .stat-card"
    );

hiddenElements.forEach((el) => {
    observer.observe(el);
});


/* =========================
   NAVBAR ACTIVE
========================= */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(
        ".nav-links a"
    );

window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop;

            if (
                pageYOffset >=
                sectionTop - 250
            ) {
                current =
                    section.getAttribute("id");
            }

        });

        navItems.forEach((item) => {

            item.classList.remove(
                "active"
            );

            if (
                item.getAttribute("href") ===
                "#" + current
            ) {
                item.classList.add(
                    "active"
                );
            }

        });

    }
);


/* =========================
   PARALLAX FOTO PROFIL
========================= */

const photo =
    document.querySelector(
        ".hero-right img"
    );

document.addEventListener(
    "mousemove",
    (e) => {

        if (!photo) return;

        const x =
            (window.innerWidth / 2 -
                e.pageX) /
            50;

        const y =
            (window.innerHeight / 2 -
                e.pageY) /
            50;

        photo.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);


/* =========================
   SMOOTH SCROLL MENU
========================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach((anchor) => {

        anchor.addEventListener(
            "click",
            function (e) {

                e.preventDefault();

                const target =
                    document.querySelector(
                        this.getAttribute(
                            "href"
                        )
                    );

                if (target) {

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

                navLinks.classList.remove(
                    "active"
                );

            }
        );

    });


/* =========================
   EFEK BINTANG MENGIKUTI MOUSE
========================= */

document.addEventListener(
    "mousemove",
    (e) => {

        const stars =
            document.querySelector(
                ".stars"
            );

        const stars2 =
            document.querySelector(
                ".stars2"
            );

        if (!stars || !stars2) return;

        const x =
            e.clientX / 80;

        const y =
            e.clientY / 80;

        stars.style.transform =
            `translate(${x}px, ${y}px)`;

        stars2.style.transform =
            `translate(${x / 2}px, ${y / 2}px)`;

    }
);