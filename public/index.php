<?php
// Check if the requested URI is ".env"
if (strpos($_SERVER['REQUEST_URI'], '/.env') !== false) {
    // Redirect to the home page
    header('Location: /');
    exit();
}
?>