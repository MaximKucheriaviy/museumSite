<?php
if (isset($_POST)) {
    
    if(/*$_POST['Name'] == '' || $_POST['Sername'] == '' || $_POST['Telephone'] == '' || $_POST['Date'] == '' || $_POST['callback'] == ''*/false){
        echo("Reqest faild");
    }
    else{
        $mysql = mysqli_connect("sql310.epizy.com", "epiz_31259283", "CUF8DeDdMeE5Sd", "epiz_31259283_MuseumIvents");
        if($mysql == false){
            echo('Connect false'. mysqli_connect_error());
        }
        else{
            mysqli_set_charset($mysql, "utf8");

            $sql = "SELECT * FROM `Экскурсии` WHERE `Дата` = '". $_POST['Date'] ."'";
            $result = mysqli_query($mysql, $sql);
            $row = mysqli_fetch_array($result);
            if($row['Дата'] == $_POST['Date']){
                echo('-3');
            }
            else{
                $sql = "INSERT INTO `Экскурсии` (`ID`, `Имя`, `Дата`, `Телефон`, `Звонок`, `Статус`) VALUES (NULL, '". $_POST['Name'] ."', '". $_POST['Date'] ."', '". $_POST['Telephone'] ."', '". $_POST['callback'] ."', 'Обработка');";
                $result = mysqli_query($mysql, $sql);
                if($result == false){
                    echo("Reqest false");
                }
                else{
                    $sql = "SELECT * FROM `Экскурсии` WHERE `Дата` = '". $_POST['Date'] ."'";
                    $result = mysqli_query($mysql, $sql);
                    $row = mysqli_fetch_array($result);
                    echo($row['ID']);
                }
            }            
        }
    }
}


/*use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

INSERT INTO `Экскурсии` (`ID`, `Имя`, `Дата`, `Телефон`, `Звонок`, `Статус`) VALUES (NULL, 'Максим', '2022-03-22', '+380993282760', 'не пене', 'Обработка');

//Load Composer's autoloader
require 'include/PHPMailer.php';
require 'include/SMTP.php';
require 'include/Exception.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'in-v3.mailjet.com ';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = '336215c1850a0d09436f9b1b9186fe9b';                     //SMTP username
    $mail->Password   = '21d012302518c621c6fe31219afa1c28';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('maxim-k@i.ua', 'Mailer');
    $mail->addAddress('maximandersen@gmail.com', 'Joe User');     //Add a recipient

    //Attachments

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Here is the subject';
    $mail->Body    = 'OK this is a mail';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    ec*/
?>