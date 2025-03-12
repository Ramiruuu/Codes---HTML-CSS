const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

// Move "No" button randomly on hover
noBtn.addEventListener("mouseover", () => {
    const x = Math.floor(Math.random() * window.innerWidth - 100);
    const y = Math.floor(Math.random() * window.innerHeight - 100);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Show result on "Yes" click
yesBtn.addEventListener("click", () => {
    document.querySelector(".buttons").style.display = "none";
    result.classList.remove("hidden");
});

