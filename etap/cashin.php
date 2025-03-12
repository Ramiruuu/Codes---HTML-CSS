<?php
header("Content-Type: application/json");

// Database credentials
$servername = "localhost";
$username = "root";
$password = "";
$database = "etap"; // Make sure your database name is correct

// Connect to MySQL
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "Database connection failed!"]);
    exit;
}

// Check if request is POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Validate input
    if (!isset($_POST["wallet"], $_POST["phone"], $_POST["amount"])) {
        echo json_encode(["status" => "error", "message" => "Missing required fields!"]);
        exit;
    }

    // Sanitize form data
    $wallet = trim($conn->real_escape_string($_POST["wallet"]));
    $phone = trim($conn->real_escape_string($_POST["phone"]));
    $amount = floatval($_POST["amount"]);

    // Ensure input is valid
    if (empty($wallet) || empty($phone) || $amount <= 0) {
        echo json_encode(["status" => "error", "message" => "Invalid input."]);
        exit;
    }

    // Insert into transactions table
    $stmt = $conn->prepare("INSERT INTO transactions (wallet_type, phone, amount) VALUES (?, ?, ?)");
    $stmt->bind_param("ssd", $wallet, $phone, $amount);

    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "Cash-in successful!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Database error: " . $stmt->error]);
    }

    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}

$conn->close();
?>
