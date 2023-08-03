// declaration of vaiables
var saveBtn = $(".saveBtn");
var timeContainer = $(".timeContainer");
var currentTime = dayjs().hour();

/*dayjs current date display*/
$("#currentDay").text(dayjs().format('dddd, MMMM D, YYYY'));

/* Ensuring the code isn't run until the browser has finished rendering all images, 
when the save button is clicked the user's text input and time of input is stored in localstorage. The value for timeBLock
is split to allow for the multiword id to be used in code in a simpler manner later. */
$(function () {

    function manageSavedInput(event) {
        event.preventDefault();
        var timeBlock = $(this).parent().attr("id").split("-")[1];
        var userInput = $(this).siblings(".description").val();
        alert("Saved!");
        localStorage.setItem(timeBlock, userInput);

    }

    saveBtn.on('click', manageSavedInput);
    
/*when page loads, the user's time and text input are pulled from localstorage and displayed.  The current time is 
compared to the time slots and individualized based on color for past (gray), present (red) and future (green).*/
    
    $.each(timeContainer, function () {
        var timeBlock = $(this).attr("id");
        var savedInput = localStorage.getItem(timeBlock);
        var textarea = $(this).find(".description");
        textarea.val(savedInput);
    

        var timeInput = $(this).attr("id");
        // console.log(timeInput);
        if (currentTime == timeInput) {
            $(this).addClass("present");

        } else if (currentTime > timeInput) {
            $(this).addClass("past");

        } else {
            $(this).addClass("future");
        }
        
    });

});