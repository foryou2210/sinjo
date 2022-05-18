<?php 
    session_start();
    $host = 'localhost';
    $user = 'root';    
    $db = 'hyosung3';
    // 디비서버접속
    $conn = mysqli_connect($host, $user);
    // 디비선택
    $db_conn = mysqli_select_db($conn, $db);    
    if ($db_conn) {
        echo 'db접속 성공!';
    } else {
        echo 'db접속 실패';
    }
?>