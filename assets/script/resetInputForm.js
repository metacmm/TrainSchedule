/** reset the input form */
function resetInputForm(){
    $("#head-display").text("Add Train");
    $("#head-display").removeClass("bg-info");
    $("#name-input").val("");
    $("#dest-input").val("");
    $("#firstTime-input").val("");
    $("#freq-input").val("");
    $("#btn-submit").val("Submit");
    $("#btn-cancel").css("visibility","hidden");
    $(".btn-edit").show();
    $(".btn-delete").show();
}