<?php
    $resronse = $_POST['ID'];

    $mysql = mysqli_connect("sql310.epizy.com", "epiz_31259283", "CUF8DeDdMeE5Sd", "epiz_31259283_MuseumIvents");
        if($mysql == false){
            echo('Connect false'. mysqli_connect_error());
        }
        else{
            mysqli_set_charset($mysql, "utf8");
            $sql = "SELECT * FROM `Экскурсии` WHERE `ID` = '". $_POST['ID'] ."'";
            $result = mysqli_query($mysql, $sql);
            $row = mysqli_fetch_array($result);
            $json = json_encode($row);
            echo($json);
        }
?>