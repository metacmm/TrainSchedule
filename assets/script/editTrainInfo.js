function editTrainInfo() {
    event.preventDefault();
    //get the selected row data
    var tbl_row = $(this).closest("tr");
    var row_id = tbl_row.attr("row-id");
    
    database.ref(row_id).once("value").then(function (snapshot) {
        console.log(snapshot.val());
        var train_name = snapshot.val().name;
        var train_dest = snapshot.val().dest;
        var train_freq = snapshot.val().freq;
        var train_startTime = moment.unix(snapshot.val().firstTime).format("HH:mm");

        //display the data in the bottom card
        $("#head-display").text("Edit Train " + train_name);
        $("#name-input").val(train_name);
        $("#dest-input").val(train_dest);
        $("#firstTime-input").val(train_startTime);
        $("#freq-input").val(train_freq);

        //update the bottom card to edit mode
        $("#card-id").attr("row-id", row_id);
        $("#head-display").addClass("bg-info");
        $("#btn-submit").val("Save");
        $("#btn-cancel").css("visibility","visible");
        $(".btn-edit").hide();
        $(".btn-delete").hide();
    });


}