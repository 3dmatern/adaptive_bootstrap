$( document ).ready(function() {
    $("#ajax_btn").click(
		function(){
			sendAjaxForm('result_form', 'ajax_form', 'php/action_ajax_form.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
        	$('#result_form').html('Спасибо, ждите новостей!');
    	},
    	error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
    	}
 	});
};

$( document ).ready(function() {
    $("#ajax_btn_2").click(
		function(){
			sendAjaxForm('result_form_2', 'ajax_form_2', 'php/action_ajax_form.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(result_form_2, ajax_form_2, url) {
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form_2).serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	result = $.parseJSON(response);
        	$('#result_form_2').html('Спасибо, ждите новостей!');
    	},
    	error: function(response) { // Данные не отправлены
            $('#result_form_2').html('Ошибка. Данные не отправлены.');
    	}
 	});
};
