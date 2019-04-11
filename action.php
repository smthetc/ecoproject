<?php 
if(isset($_POST['first_name'])) $first_name = $_POST['first_name'];
if(isset($_POST['last_name'])) $last_name = $_POST['last_name'];
if(isset($_POST['report'])) $report = $_POST['report'];

$db_host = "localhost"; 
$db_user = "root"; // Логин БД
$db_password = ""; // Пароль БД
$db_base = 'shumteh_wor4'; // Имя БД
$db_table = "ecotable"; // Имя Таблицы БД
$mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);
if ($mysqli->connect_error) {
    die('Ошибка : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}
$result = $mysqli->query("INSERT INTO ".$db_table." (first_name,last_name,report) VALUES ('$first_name','$last_name','$report')");

?>