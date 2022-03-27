<?php
    $mysql = mysqli_connect("sql310.epizy.com", "epiz_31259283", "CUF8DeDdMeE5Sd", "epiz_31259283_MuseumIvents");
    mysqli_set_charset($mysql, "utf8");

    if($_POST['message'] == 'Обработка'){
        $sql = "SELECT * FROM `Экскурсии` WHERE `Статус` LIKE 'Обробка'";
        $result = mysqli_query($mysql, $sql);
        $row = mysqli_fetch_all($result);
        $json = json_encode($row);
        echo($json);
    }
    else if($_POST['message'] == 'Change'){
        $sql = "UPDATE `Экскурсии` SET `Статус` = '".$_POST['state']."' WHERE `Экскурсии`.`ID` = ".$_POST['ID']."";
        $result = mysqli_query($mysql, $sql);
        if($result){
            echo("OK");
        }
        else{
            echo("NO");
        }
    }
 ?>