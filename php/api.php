<?php
    //Подключаем PHPMailer

    use PHPMailer\PHPMailer\PHPMailer;

    require_once 'phpmailer_class.php';
    //заносим введенные пользователем данные в переменные, если они пустые, то уничтожаем переменные
    if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['tel'])) {
        $name = $_POST['name'];
        if($name == ' ') unset($login);
        $email = $_POST['email'];
        if($email == ' ') unset($email);
        $tel = $_POST['tel'];
        if($tel == ' ') unset($tel);
    }
    //если пользователь не ввел какие-либо данные, то выдаем ошибку и останавливаем скрипт
    if(empty($name) or empty($email) or empty($tel)) exit ('Вы ввели не всю информацию!');
    //если все данные введены, то обрабатываем их, чтобы теги htmlspecialchars() и скрипты stripslashes() не работали, мало ли что люди могут ввести
    //trim() убираем лишние пробелы
    $name = trim(htmlspecialchars(stripslashes($name)));
    $email = trim(htmlspecialchars(stripslashes($email)));
    $tel = trim(htmlspecialchars(stripslashes($tel)));

    $mail = new PHPMailer();
    try{
        $mail -> CharSet = 'utf-8';
        $mail -> setFrom('mycomp@mail.ru', 'Matern'); //от кого письмо
        $mail -> addAddress('denismatern@gmail.com', 'Денис Матерн'); //кому отправляем письмо
        $mail -> addReplyTo('info@mysite.local', 'info'); //Кому будет отправлен ответ, если пользователь захочет ответить на сообщение
        $mail -> isHTML(true); //указываем, что письмо отправляется в HTML формате
        
        //Стандартные праметры отправки
        $mail -> Subject = 'Заявка на консультацию';
        $mail -> Body = "<div>$name</div> <div>$email</div> <div>$tel</div>";
        $mail -> AltBody = "$name, $email, $tel";
        //далее вызываем метод send()
        $mail -> send();
        echo 'OK';
    }catch(Exception $e){
            echo "Письмо не отправлено. Mailer Error: {$mail -> ErrorInfo}";
    }
    
?>