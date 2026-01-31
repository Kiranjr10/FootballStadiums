<?php
/* Handles the fan hub comment form submission */

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $username = $_POST["name"];
    $usercomment = $_POST["message"];
    
    echo "<h1>Thank You for Your Comment!</h1>";
    echo "<p><strong>Name:</strong> " . $username . "</p>";
    echo "<p><strong>Your Comment:</strong> " . $usercomment . "</p>";
    
    echo "<br><a href='fotework.html'>Return to Home</a>";
    
} else {
    echo "<h1>No data submitted.</h1>";
    echo "<a href='fotework.html'>Go back to Home</a>";
}
?>
