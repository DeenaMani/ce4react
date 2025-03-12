<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Welcome to CodeIgniter 4!</title>
    <meta name="description" content="The small framework with powerful features">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" type="image/png" href="/favicon.ico">
</head>

<body>

    <div id="root"></div>

    <?php
    // Function to check if a URL is reachable (Webpack Dev Server or fallback)
    function is_server_reachable($url)
    {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_TIMEOUT, 5);  // Set timeout to 5 seconds
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, true);
        curl_setopt($ch, CURLOPT_NOBODY, true); // We just want to check the header
        $response = curl_exec($ch);
        $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        // Return true if we get a successful HTTP response (200)
        return ($status_code == 200);
    }

    // URL of Webpack Dev Server's bundle.js
    $webpack_url = 'http://localhost:3000/bundle.js';

    // Check if the Webpack dev server is reachable
    if (is_server_reachable('http://localhost:3000')) {
        echo "<script type='module' src='$webpack_url'></script>";  // Use Webpack dev server bundle
    } else {
        // Fallback to local bundle.js (production build)
        echo "<script src='" . base_url('public/assets/js/bundle.js') . "'></script>";
    }
    ?>
</body>

</html>