<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .header {
        display: flex;

    }

    .item {
        flex-grow: 1;
    }
</style>
<body>
    <div class="container header" style="text-align: center;">
        <div class="item">
            로고
        </div>
        <div class="item">
            페이지 제목
        </div>
        <div class="item">
            <?php if ($_SESSION['no']) {?>
                <button onclick="logout()">로그아웃</button>
            <?php } else { ?>
                <button onclick="login()">로그인</button>
            <?php } ?>
        </div>
    </div>
</body>
</html>
<script>

function logout() {
    location.href="logout.php";
}

function login() {
    location.href="index.php";
}

</script>