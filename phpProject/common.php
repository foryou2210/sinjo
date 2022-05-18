<?php 
    // 세션은 대게 사용자의 정보를 저장해서,
    // 필요한 곳에 불러와 사용한다.
    session_start();

    $host = "localhost";
    $user = "root";
    $db = "hyosung3";

    $conn = mysqli_connect($host, $user, null, $db);

    // print_r($conn);

?>