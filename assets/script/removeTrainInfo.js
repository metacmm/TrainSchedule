function removeTrainInfo(){
    event.preventDefault();
    //get the selected row data
    var tbl_row = $(this).closest("tr");
    var row_id = tbl_row.attr("row-id");

    database.ref(row_id).remove()
    .then(function(){
        console.log("Remove " + row_id + "succeed.");
        //delete the row
        tbl_row.remove();
    })
    .catch(function(error){
        console.log("Remove failed: " + error.message);
    })
}