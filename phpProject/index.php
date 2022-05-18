<?php

    include("common.php");
    if ($_SESSION) {
        echo "로그인 정보가 있습니다.";
    } else {
        echo "
        <script>
            location.herf='login.php';
        </script>
        ";
    }

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div style="background-color: black; padding:30px; color:white; text-align: center;">
        header
    </div>
</body>
</html>