/**this function is to read data from database */
function readTrainInfoFromDB() {
    database.ref().on("value", function (snapshot) {
        $("tbody").empty();

        //add each row to table
        snapshot.forEach(function (childSnapshot) {
            var row_id = childSnapshot.key;
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

            var option_cell = $("<td>");
            option_cell.append(
                $("<span class='btn_edit'><a href='#' class='btn btn-link' row_id=" + row_id + "'> Edit</a> </span>'"),
                $("<span class='btn_delete'><a href='#' class='btn btn-link' row_id=" + row_id + "'> Delete</a> </span>'"),

                //only show these buttons if edit button is clicked
                $("<span class='btn_save'><a href='#' class='btn btn-link' row_id=" + row_id + "'> Save</a> </span>'"),
                $("<span class='btn_cancel'><a href='#' class='btn btn-link' row_id=" + row_id + "'> Cancel</a> </span>'"),
            );
            var newRow = $("<tr row_id=" + row_id + ">").append(
                $("<td>").text(trainName),
                $("<td>").text(trainDest),
                $("<td>").text(trainFreq),
                $("<td>").text(nextArrivalTime.format("HH:mm")),
                $("<td>").text(minutesAway),
                option_cell
            );
            $("tbody").append(newRow);
        });

        //hide save and cancel button
        $(document).find(".btn_save").hide();
        $(document).find(".btn_cancel").hide();
    });

}