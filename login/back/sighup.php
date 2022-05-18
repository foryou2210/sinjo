<?php 
    include('db.php');
    print_r($_GET);
    print_r($_POST);    

    $id = $_POST['uid'];
    $pw = $_POST['pw'];
    $name = $_POST['name'];
    $location = $_POST['location'];
    $birth = $_POST['birth'];
    $sex = $_POST['sex'];
    $email = $_POST['email'];    

    
    $sql = "insert into member set
    email = '$id',
    password = '$pw',
    name = '$name',
    age = '$birth',
    sex = '$sex',
    location = '$location'    
    ";
    echo $sql;

    $result = $conn -> query($sql);

    if ($result) {
        echo "
        <script>
            location.href='todo.php';
        </script>
        ";
    } else {
        echo "
        <script>
            location.back();
        </script>
        ";
    }
    

?>