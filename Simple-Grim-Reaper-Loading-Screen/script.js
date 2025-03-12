let progress = 0;
let daysLeft = 5;

function updateProgress() {
    progress += 20; // Increase progress by 20% per update
    daysLeft--; // Decrease days left

    document.querySelector(".progress").style.width = progress + "%";
    document.getElementById("daysLeft").innerText = daysLeft;

    if (progress >= 100) {
        clearInterval(interval);
        document.querySelector(".deadline-text").innerText = "Deadline reached!";
    }
}

let interval = setInterval(updateProgress, 1000); // Update every second

