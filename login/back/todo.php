<?php 
include('db.php');
$user_no = $_SESSION['no'];
if($user_no) {
    print($_SESSION['email'] . "님 환영합니다" );
} else {
    echo "
    <script>
        location.href = 'login.php';
    </script>
    ";
}

include('header.php');
include('../view/todo.html');
?>
