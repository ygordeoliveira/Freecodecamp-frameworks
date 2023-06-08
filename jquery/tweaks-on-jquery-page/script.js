$(document).ready(function() {
    $("body").addClass("animated hinge");
    $("body").css("background-color", "#2E8B57");
    $(".container-fluid").css("background-color", "#D3D3D3");
    $(".container-fluid").css("font-family", "Verdana");
    $(".container-fluid").css("padding", "15px");
    $("h3").css("text-align", "center");
    $("#btn-new-background-color").click(function() {
        let color = $("#color").val();
        $("body").css("background-color", color);
    })
});
