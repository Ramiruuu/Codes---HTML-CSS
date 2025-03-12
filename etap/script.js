document.getElementById("cashinForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let formData = new FormData(this);

    fetch("cashin.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        let messageBox = document.getElementById("message");
        let confirmationBox = document.getElementById("confirmation");

        if (data.status === "success") {
            messageBox.innerHTML = `<span style="color: green;">${data.message}</span>`;
            confirmationBox.classList.remove("hidden");
            this.reset(); // Clear form fields
        } else {
            messageBox.innerHTML = `<span style="color: red;">${data.message}</span>`;
            confirmationBox.classList.remove("hidden");
        }
    })
    .catch(error => console.error("Error:", error));
});
