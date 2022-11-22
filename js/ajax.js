$(document).ready(function() {
    $('form').submit(function(e){
        e.preventDefault(); //запрещает переход на файл указанный в атрибуте action (запрещает отправку формы в браузере)
        let data = $("form").serializeArray();
        
        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'), //this - получение данных! В данном случае из attr(Атрибута) action т.е. в данном случае путь к файлу
            data: data, // Получение отправляемых данных из всей формы
            cache: false,
            //processData: false,  //чтобы данные не преобразовывались в строку
            success: function(msg){
                console.log(msg);
                if(msg == 'OK') {
                    $('form').find('input[type=text], input[type=email], input[type=tel]').val(''); //очищает input полсе отправки
                    result = 'Данные отправлены! <b>Мы скоро Вам перезвоним!</b>'
                } else {
                    result = msg;
                }
                $("#result_form").html(result);
                $("#result_form_2").html(result);
            },
            error: function(){ //данная ошибка выводится, если мы в скрипте указали например неверный путь к php обработчику
                $("#result_form").html('Ошибка отпраки данных!');
            }
        })
        return false;
    });
});
