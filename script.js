$(document).ready(function() {

    var $doggie = $("img");

    $doggie.click(function() {
        $(this).hide("slow");
    });

    $("#restore").click(function() {
        $doggie.show();
    });

});