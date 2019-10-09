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

            //add edit/delete buttons for each row
            var option_cell = $("<td>");
            option_cell.append(
                $("<span class='btn-edit'><a href='#' class='btn btn-link'> Edit</a> </span>"),
                $("<span class='btn-delete'><a href='#' class='btn btn-link'> Delete</a> </span>"),

                //only show these buttons if edit button is clicked
                $("<span class='btn-save'><a href='#' class='btn btn-link'> Save</a> </span>"),
                $("<span class='btn-cancel'><a href='#' class='btn btn-link'> Cancel</a> </span>"),
            );
            var newRow = $("<tr row-id=" + row_id + ">").append(
                $("<td id='col-name'>").text(trainName),
                $("<td id='col-dest'>").text(trainDest),
                $("<td id='col-freq'>").text(trainFreq),
                $("<td>").text(nextArrivalTime.format("HH:mm")),
                $("<td>").text(minutesAway),
                option_cell
            );
            $("tbody").append(newRow);
        });

        //hide save and cancel button
        $(document).find(".btn-save").hide();
        $(document).find(".btn-cancel").hide();
    });

}