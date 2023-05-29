$(document).ready(function () {
    $(".quick-button, .cart-button, .item-button, .element-button").click(function () {
        $(this).toggleClass('selected');
        var text = $(this).text();
        if ($(this).hasClass('selected')) {
            /*$('#description').val($('#description').val() + text + ', ');*/
        } else {
            /*$('#description').val($('#description').val().replace(text + ', ', ''));*/
        }
    });

    $("form").on('submit', function (event) {
        event.preventDefault();
        // tutaj zapis do bazy danych lub innej operacji
        alert('Formularz wysłany!'); // tymczasowy alert
    });
});