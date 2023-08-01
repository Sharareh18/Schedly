

// how do I get it to just be the time but all of the time without a plugin?  dayjs().hour()
// console.log(currentTime);
var saveBtn = $(".saveBtn");
var currentTime = dayjs().hour(); 
var timeBlock = $("#time-block");

// is the below funtion the shorthand for $(document).ready()?
$(function () {

    function manageSavedInput(event){
        var userInput = $(this).siblings(".description").val();
        var timeBlock = $(this).parent().attr("id");
        console.log(userInput, timeBlock);
        alert("Saved!");
        localStorage.setItem(userInput, timeBlock);
    }
    saveBtn.on('click', manageSavedInput);

    // when save button gets clicked I need for the input in every line that has a "description" class and all of its 
    // siblings to have that iput be their value and that will define my variable for the actual inputs. Use this for the 
    // element 

    // I need to associate the value that was put into those elements with the timeblock it was put into and save them together. 
    // the timeblock is the parent of the elements with description class so use the actual hour of the timeblock for association. 

    // and then I need to save them to the local storage. 


    $.each(timeBlock, function(hour, i) {
        var timeInput = parseInt($(timeBlock).attr("id"));
        if (timeInput < currentTime) {
            $(".row").children("description").addClass("past");
        }else if(timeInput == currentTime){
            $(".row").children("description").addClass("present");
        }else{
            $(".row").children("description").addClass("future");
        }
    })
    
    // for (let i = 9; i <= 19; i++) {
    //     var storedTime = localStorage.getItem(i); 
    //     $("#hour-"+ i).children(".description").val(storedTime)
    
    //     if (i < currentTime) {
    //         $("#hour-" + i).children("description").addClass("past");
    //     } else if (i == currentTime) {
    //         $("#hour-" + i).children("description").addClass("present");
    //     } else {
    //         $("#hour-" +i).children("description").addClass("future");
    //     }
    // }

});
    

//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?


//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

//

// TODO: Add code to display the current date in the header of the page.
$("#currentDay").text(dayjs().format("ddd, MMM DD, YYYY h:mm a"));
