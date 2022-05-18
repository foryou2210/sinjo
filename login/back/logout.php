<?php 
session_start();
session_destroy();
echo "
<script>
location.href='../view/index.html'
</script>
"

?>