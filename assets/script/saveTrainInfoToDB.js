/**this function is to save input to database */
function saveTrainInfoToDB(){
    event.preventDefault();
    
    //get input boxes contents
    const train_name = $("#name-input").val().trim();
    const train_dest = $("#dest-input").val().trim();
    const train_firstTime_input = $("#firstTime-input").val().trim();
    const train_firstTime = moment(train_firstTime_input, "HH:mm").format("X");
    console.log(train_firstTime);
    const train_freq = $("#freq-input").val().trim();
    var trainObj = {
        name: train_name,
        dest: train_dest,
        firstTime: train_firstTime,
        freq: train_freq
    };
    const row_id = $("#card-id").attr("row-id");
    console.log(trainObj);
    
    //new item added to database
    if (row_id === ""){
        database.ref().push(trainObj);
    }
    //update and existing item in database
    else{
        database.ref(row_id).set(trainObj);
    }

    resetInputForm();
}