<?php

$servername = "localhost";
$username = "root@localhost";
$password = "";
$dbname = "adhdQuiz";


$conn = mysqli_connect($servername, $username, $password, $dbname);


// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
} else {
  echo "Connected successfully!"; 
}

$firstName = $_POST["firstName"];
$lastName = isset($_POST["lastName"]) ? $_POST["lastName"] : ""; 
$email = $_POST["email"];
$result = $_GET["result"];


$sql = "INSERT INTO registration (firstName, lastName, email, result) VALUES ('$firstName', '$lastName', '$email', $result)";


if (mysqli_query($conn, $sql)) {
  echo "Thank you for registering! Your results have been stored.";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>
