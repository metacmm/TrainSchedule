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
    console.log(trainObj);
    //save to database
    database.ref().push(trainObj);

    //clear the input boxes
    $("#name-input").val("");
    $("#dest-input").val("");
    $("#firstTime-input").val("");
    $("#freq-input").val("");
}