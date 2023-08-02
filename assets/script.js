

// how do I get it to just be the time but all of the time without a plugin?  dayjs().hour()? 
// console.log(currentTime);
var saveBtn = $('.saveBtn');
var timeContainer = $('.timeContainer');
var currentTime = dayjs().hour();

// is the below funtion the shorthand for $(document).ready()?

// when save button gets clicked I need for the input in every line that has a "description" class and all of its 
// siblings to have that iput be their value and that will define my variable for the actual inputs. Use this for the 
// element 

// I need to associate the value that was put into those elements with the timeblock it was put into and save them together. 
// the timeblock is the parent of the elements with description class so use the actual hour of the timeblock for association. 

// and then I need to save them to the local storage. 
// I can use the same concept as the pizza activity and tie the event to the specific function and use this to parse out the class
// in the element and get its value 

// or 

// i could use the jquery $(".saveBtn") and not need to call the function separate.
// ask if one's better than the other
$(function () {

    function manageSavedInput(event) {
        var userInput = $(this).siblings('.description').val();
        var timeBlock = $(this).parent().attr('id');
        console.log(userInput, timeBlock);
        alert("Saved!");
        localStorage.setItem(userInput, timeBlock);
    }

    saveBtn.on('click', manageSavedInput);


    // so first I have to use dayjs to get the current hour (put it in my vars up top)
    // then I have to get the numeric value of the input time 
    // then get the value of the current time and run an if statement to say if current time is = input time 
    // add the class representing present to the element.
    // I can use a loop and go through and compare or I can use the thing we did in class and do each...
    
    $.each(timeContainer, function () {
        var timeInput = $(this).attr('id');
        if (currentTime == timeInput) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");

        } else if (currentTime > timeInput) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");

        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });

    // $.each(timeContainer, function () {
    //     var timeInput = $(this).attr('id');
    //     console.log(timeInput);
    //     if (timeInput < currentTime) {
    //         $(".timeContainer").addClass("past");
    //     } else if (timeInput == currentTime) {
    //         $(".timeContainer").addClass("present");
    //     } else {
    //         $(".timeContainer").addClass("future");
    //     }
    // });

    // for (let i = 9; i<= 17; i++) {
    //     var timeInput = 
    // if (timeInput == currentTime) {
    // 
    // }
    // }
});

// I have to get the stored text inputs from the local storage and put them in the textarea. 
//the tip said to use the id attribute of each time block 

function displayUserInput() {
    var userInput = localStorage.getItem(userInput);
    console.log(userInput);
    // and then do I append it to the textarea? 


}

// TODO: Add code to display the current date in the header of the page.
$("#currentDay").text(dayjs().format("ddd, MMM DD, YYYY h:mm a"));
