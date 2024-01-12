<?php
// Database connection details
$servername = "localhost";
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the default user exists in the database
$defaultUser = "admin";
$defaultPassword = "123";

$sql = "SELECT * FROM users WHERE username='$defaultUser'";
$result = $conn->query($sql);

if ($result->num_rows == 0) {
    // Insert the default user into the database
    $sql = "INSERT INTO users (username, password) VALUES ('$defaultUser', '$defaultPassword')";
    $conn->query($sql);
}

?>
