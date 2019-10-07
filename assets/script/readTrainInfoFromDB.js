function readTrainInfoFromDB(snapshot){
    console.log(snapshot.val());
    snapshot.forEach(function(childSnapshot){
        console.log(childSnapshot.val());
        var trainName = childSnapshot.val().name;
        var trainDest = childSnapshot.val().dest;
        var trainFreq = childSnapshot.val().freq;
        var newRow = $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(trainDest),
            $("<td>").text(trainFreq),
            $("<td>").text(""),
            $("<td>").text("")
        );
        $("tbody").append(newRow);
    });
}