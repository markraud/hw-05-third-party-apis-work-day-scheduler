// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    var currentDate = moment();
    $("#currentDay").text(currentDate.format("dddd, MMMM Do"));

    var taskArray =[];

    //listen for click events
    $(".saveBtn").on("click", function(){
        // create a variable to represent the given hour
        var givenHour = $(this).parent().attr("id");
        // create a variable to represent the task info
        var taskInfo = $(this).siblings(".text").val();
        console.log(givenHour);
        console.log(taskInfo);
        // save info into local storage
        localStorage.setItem(givenHour, taskInfo);
    })

    //write a function that loads the taskInfo from localStorage after refresh
    function getTaskInfo () {
        var storedGivenHour = localStorage.getItem("givenHour");
        var storedTaskInfo = localStorage.getItem("taskInfo");
        console.log(storedGivenHour);
        console.log(storedTaskInfo);
    }


    // write a function that changes color base on current hour
    function colorTimeblocks(){
        var currentTime = moment().hours();
        //var currentTime = 11;
        //console.log(currentTime); 
        $(".time-block").each(function(){
            //figure out the hour of each block
            var blockHour = $(this).attr("id").split("-");
            blockHour = parseInt(blockHour[1]);
            //console.log(blockHour);
            //check the time and compare using if statement
            if (blockHour < currentTime){
                //change the color to add class for past $(this).addClass
                $(this).addClass("past");
            }else if (blockHour === currentTime) {
                // add class for present
                $(this).addClass("present");
            }else {
                // add class for future
                $(this).addClass("future");
            }
        })
    }

    colorTimeblocks();
    getTaskInfo ();
    
});

