window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }

    // Mostrar u ocultar el botón para subir
    const btn = document.getElementById("btnSubir");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

// Animación de aparición del menú al cargar
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("#menu-principal li");
    links.forEach((link, i) => {
        link.style.opacity = 0;
        link.style.transform = "translateY(-20px)";
        setTimeout(() => {
            link.style.transition = "all 0.5s ease";
            link.style.opacity = 1;
            link.style.transform = "translateY(0)";
        }, i * 150); // Retraso entre cada elemento
    });

    // Evento del botón para volver arriba
    const btn = document.getElementById("btnSubir");
    btn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});