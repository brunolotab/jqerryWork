$( function() {
    $("#tabs").tabs();
    $("#tabs-4").text("you semmed lonely");
    //$("#datepicker").datepicker();
    $("#datepicker").datepicker({
        onSelect: function(dateText, inst) {
            $("#note").text("you picked: " + dateText)
        }
    });
    $("#second").addClass("standin").fadeOut(5000).fadeIn(5000);
    $("#fifth").addClass("standout");
    $("#toggle").addClass("button").click(function(){
    $("#fifth").addClass("amazing").fadeToggle();
    $("#sixty").addClass("amazing").fadeToggle(3000);
    $("#childs").addClass("childs");
    $("#to").addClass("to");
    });
});
