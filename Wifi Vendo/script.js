let totalTime = 0;
let usedTime = 0;

function insertCoin() {
    const amount = parseFloat(prompt("Enter amount:"));
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid input. Please enter a positive numeric value.");
        return;
    }
    const timeToAdd = amount * 1; // Assuming 1 unit of currency adds 1 hour of time
    totalTime += timeToAdd;
    displayStatus(totalTime, usedTime);
}

function pause() {
    alert('Paused!');
}

function displayStatus(totalTime, usedTime) {
    const remainingTime = totalTime - usedTime;
    const status = remainingTime > 0 ? 'ACTIVE' : 'INACTIVE';

    document.getElementById('total-time').textContent = `Total Time: ${totalTime}Hr`;
    document.getElementById('used-time').textContent = `Used Time: ${usedTime}Hr`;
    document.getElementById('remaining-time').textContent = `Remaining: ${remainingTime}Hr`;
    document.getElementById('status').textContent = `Status: ${status}`;
}

function getUserInput() {
    totalTime = parseFloat(prompt("Enter total time in hours:"));
    usedTime = parseFloat(prompt("Enter used time in hours:"));

    if (isNaN(totalTime) || isNaN(usedTime)) {
        alert("Invalid input. Please enter numeric values.");
    } else {
        displayStatus(totalTime, usedTime);
    }
}