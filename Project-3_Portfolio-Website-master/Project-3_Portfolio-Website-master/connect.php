<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Get form data
$name = $_POST['Name'];
$email = $_POST['Email'];
$message = $_POST['Message'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'contact-form');

// Check for connection error
if ($conn->connect_error) {
    die("Connection Failed: " . $conn->connect_error);
} else {
    // Prepare and bind statement
    $stmt = $conn->prepare("INSERT INTO contact (Name, Email, Message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message); // 'sss' indicates all are strings
    $execval = $stmt->execute();
    
    if ($execval) {
        echo "Message submitted successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }
    
    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>
