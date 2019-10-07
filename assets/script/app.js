var database;
$(document).ready(function () {
    firebase.initializeApp(config);
    database = firebase.database();
    readTrainInfoFromDB();


    $("#btn-submit").on("click", saveTrainInfoToDB);
    var intervalId = setInterval(readTrainInfoFromDB, 60000);
});