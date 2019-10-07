var database;
$(document).ready(function () {
    firebase.initializeApp(config);
    database = firebase.database();
    $("#btn-submit").on("click", saveTrainInfoToDB);
    database.ref().on("value", readTrainInfoFromDB);
    var intervalId = setInterval(readTrainInfoFromDB,60000);
});