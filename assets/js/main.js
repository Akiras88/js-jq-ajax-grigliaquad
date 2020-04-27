/************************************************************************************

    QUADRATINI AJAX

    Grid 6x6 (36 boxes), with each click an AJAX request starts which takes a random number from 1 to 9 (choose the appropriate API).

    If it is <= 5 the square turns yellow, if it is> 5 the square turns green.

 ************************************************************************************/

$(document).ready(function() {
    // reference
    var myApi = 'https://flynn.boolean.careers/exercises/api/random/int';
    var boxes = $(".box");

    boxes.click(function(){
        var self = $(this);
        // call AJAX for random numer 1 to 9
        $.ajax({
            url: myApi,
            method: 'GET',
            success: function(data) {
                var randomNumber = data.response;
                // check value
                if ( self.text() === '0' ) {
                    self.text(randomNumber);
                } else {
                    alert('Hai già cliccato qui!');
                }
                // check if number is <= 5 add class yellow, or if is > 5 add class green
                if ( self.text() <= '5') {
                    self.addClass('box-min-5 ');
                } else {
                    self.addClass('box-sup-5');
                };
            },
            error: function() {
                console.log('Errore chiamata API')
            }
        });
    });






}); // end document ready




