var database;
$(document).ready(function () {
    firebase.initializeApp(config);
    database = firebase.database();
    $("#btn-submit").on("click", saveTrainInfoToDB);
    database.ref().once("value", function(snapshot){
        readTrainInfoFromDB(snapshot);
    });
});