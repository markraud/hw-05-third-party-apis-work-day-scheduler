// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    var currentDate = moment();
    $("#currentDay").text(currentDate.format("dddd, MMMM Do"));

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
    
});


// write a function that changes color base on current hour
function colorTimeblocks(){
    var currentTime = moment().hours();
    console.log(currentTime); 
    $(".time-block").each(function(){
        //figure out the hour of each block
        var blockHour = $(this).attr("id").split("-");
        blockHour = parseInt(blockHour[1]);
        console.log(blockHour);
        //check the time and compare using if statement
        if (blockHour < currentTime){
            //change the color to add class for past $(this).addClass

        }else if (blockHour === currentTime) {
            // add class for present
        
        }else {
            // add class for future
        
        }

        }

        }
    })
}

colorTimeblocks();




// make task area show different colors based on hour of the day
// var currentTime = moment().hour();
// console.log(currentTime); 




// click save btn to save inserted text into local storage using taskInfo
// $(".saveBtn").click(function() { 

// });
