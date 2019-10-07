/**this function is to read data from database */
function readTrainInfoFromDB() {
    database.ref().on("value", function (snapshot) {
        console.log(snapshot.val());
        $("tbody").empty();

        //add each train to table
        snapshot.forEach(function (childSnapshot) {
            var cv = childSnapshot.val();
            var trainName = cv.name;
            var trainDest = cv.dest;
            var trainFreq = cv.freq;
            var trainStartTime = moment.unix(cv.firstTime);

            //calculate the next arrival time and minutes away
            var now = moment().startOf("minute");
            var minutesToNow = now.diff(trainStartTime, "minutes");
            var nextArrivalTime = trainStartTime.add(Math.ceil(minutesToNow / trainFreq) * trainFreq, "m");
            var minutesAway = nextArrivalTime.diff(now, "minutes");
            console.log("trainStart unix Time is " + trainStartTime);
            console.log("train start time is " + trainStartTime.format());
            console.log("next Arrival Time is " + nextArrivalTime.format());
            console.log(minutesToNow);
            console.log("minutes Away = " + minutesAway);

            var newRow = $("<tr>").append(
                $("<td>").text(trainName),
                $("<td>").text(trainDest),
                $("<td>").text(trainFreq),
                $("<td>").text(nextArrivalTime.format("HH:mm")),
                $("<td>").text(minutesAway)
            );
            $("tbody").append(newRow);
        });
    });
}