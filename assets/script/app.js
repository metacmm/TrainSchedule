var database;
$(document).ready(function () {
    firebase.initializeApp(config);
    database = firebase.database();
    readTrainInfoFromDB();

    /**event handler while clicking buttons */
    $(document).on("click", ".btn-edit", editTrainInfo);
    $(document).on("click", ".btn-delete", removeTrainInfo);
    $("#btn-submit").on("click", saveTrainInfoToDB);
    $("#btn-cancel").on("click", resetInputForm);

    /**refresh the train info every minute */
    var intervalId = setInterval(readTrainInfoFromDB, 60000);
});