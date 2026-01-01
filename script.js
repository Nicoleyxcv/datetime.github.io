function updateCountdowns() {
    const countdowns = document.querySelectorAll(".countdown");
    const now = new Date().getTime();

    countdowns.forEach(countdown => {
        const targetDate = new Date(countdown.dataset.date).getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdown.innerHTML = "🎉 Es ist soweit! 🎉";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.querySelector(".days").textContent = days;
        countdown.querySelector(".hours").textContent = hours;
        countdown.querySelector(".minutes").textContent = minutes;
        countdown.querySelector(".seconds").textContent = seconds;
    });
}

setInterval(updateCountdowns, 1000);
updateCountdowns();

const petalsContainer = document.querySelector(".petals");
const petalEmojis = ["❄️"];

function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    petal.textContent = petalEmojis[Math.floor(Math.random() * petalEmojis.length)];

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = 8 + Math.random() * 10 + "s";
    petal.style.fontSize = 12 + Math.random() * 18 + "px";
    petal.style.opacity = 0.4 + Math.random() * 0.6;

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 18000);
}

// alle 800ms eine neue Blüte
setInterval(createPetal, 800);
