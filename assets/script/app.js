var database;
$(document).ready(function () {
    firebase.initializeApp(config);
    database = firebase.database();
    readTrainInfoFromDB();

    $(document).on("click", ".btn-edit", editTrainInfo);
    $(document).on("click", ".btn-delete", removeTrainInfo);
    $("#btn-submit").on("click", saveTrainInfoToDB);
    $("#btn-cancel").on("click", resetInputForm);

    var intervalId = setInterval(readTrainInfoFromDB, 60000);
});