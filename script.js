document.addEventListener("DOMContentLoaded", () => {
    const sampulContainer = document.getElementById("sampulContainer");
    const sampul = document.getElementById("sampul");
    const letterContainer = document.getElementById("letterContainer");
    const bgMusic = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");
    const emojiContainer = document.querySelector(".emoji-container");
    const emojis = ["🎉", "🌙", "✨", "🕌", "💫", "🥰"];

    function playMusic() {
        bgMusic.volume = 0.6;
        bgMusic.play().catch(() => console.log("Auto-play blocked"));
    }

    // Try to auto-play music
    playMusic();

    musicToggle.addEventListener("click", () => {
        if (bgMusic.paused) {
            playMusic();
            musicToggle.textContent = "🔊";
        } else {
            bgMusic.pause();
            musicToggle.textContent = "🔇";
        }
    });

    sampulContainer.addEventListener("click", () => {
        sampul.style.transform = "rotateX(-180deg) translateY(-10px)";
        sampul.style.zIndex = "1";
        letterContainer.style.transform = "translateY(0) scale(1)";
        letterContainer.style.opacity = "1";
        letterContainer.style.zIndex = "3";
        playMusic();
    });

    setInterval(() => {
        const emoji = document.createElement("span");
        emoji.className = "emoji";
        emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.top = Math.random() * 100 + "vh";
        emojiContainer.appendChild(emoji);
        setTimeout(() => emoji.remove(), 5000);
    }, 800);
});
