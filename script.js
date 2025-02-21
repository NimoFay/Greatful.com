document.addEventListener("DOMContentLoaded", function () {
    // Animate gratitude list items on scroll
    const gratitudeItems = document.querySelectorAll(".gratitude li");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    });

    gratitudeItems.forEach(item => {
        observer.observe(item);
    });

    // Heart Bubbles Animation
    const canvas = document.getElementById("heartCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let hearts = [];

    function createHeart() {
        let x = Math.random() * canvas.width;
        let y = canvas.height + 10;
        let size = Math.random() * 10 + 5;
        let speed = Math.random() * 2 + 1;
        hearts.push({ x, y, size, speed });
    }

    function drawHearts() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "red";
        hearts.forEach((heart, index) => {
            ctx.beginPath();
            ctx.arc(heart.x, heart.y, heart.size, 0, Math.PI * 2);
            ctx.fill();
            heart.y -= heart.speed;
            if (heart.y < -10) {
                hearts.splice(index, 1);
            }
        });
    }

    function animateHearts() {
        createHeart();
        drawHearts();
        requestAnimationFrame(animateHearts);
    }

    animateHearts();
});
