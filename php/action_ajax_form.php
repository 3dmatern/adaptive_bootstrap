<?php

    if (isset($_POST["name"]) && isset($_POST["email"]) && filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) && isset($_POST["tel"])) { 

        // Формируем массив для JSON ответа
        $result = array(
            'name' => $_POST["name"],
            'email' => $_POST["email"],
            'tel' => $_POST["tel"]
        ); 

        // Переводим массив в JSON
        echo json_encode($result); 
    }

?>
