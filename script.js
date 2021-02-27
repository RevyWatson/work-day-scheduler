//moment.js for date at top of page
let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

$(document).ready(function () {
  
  
  //save buttons event listener
  $(".saveBtn").on("click", function () {
    let value = $(this).siblings(".description").val();
    console.log(value);
    
    let time = $(this).siblings(".hour").attr("id");
    console.log(time);
    localStorage.setItem(time, value) //local storage for each time block - sets/saves event input text
  });
  
  //local storage for each time block - takes saved event input text and gets them to be stored
  $(".nineAm").val(localStorage.getItem("9am"));
  $(".tenAm").val(localStorage.getItem("10am"));
  $(".elevenAm").val(localStorage.getItem("11am"));
  $(".twelvePm").val(localStorage.getItem("12am"));
  $(".onePm").val(localStorage.getItem("1pm"));
  $(".twoPm").val(localStorage.getItem("2pm"));
  $(".threePm").val(localStorage.getItem("3pm"));
  $(".fourPm").val(localStorage.getItem("4pm"));
  $(".fivePm").val(localStorage.getItem("5pm"));
  
  // moment.js for getting hourly time
  let currentTime = moment().hours();
  // console.log(currentTime);
  
  let timeBlock = $(".time-block");
  timeBlock.each(function(index, element) {
    let compare = parseInt($(this).attr("data-hour"));
    console.log(element.getAttribute("data-hour"));
    //attaching CSS to the time for past, present and future
    if (currentTime === compare) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
      console.log("present");
      
    } else if (currentTime > compare) {
      $(this).addClass("past");
      $(this).removeClass("present");
      $(this).removeClass("future");
      console.log("past");
      
    } else if (currentTime < compare) {
      $(this).addClass("future");
      $(this).removeClass("past");
      $(this).removeClass("present");
      console.log("future");
    } else {
        console.log("It is done!")
      }
      });
      
    });
    //updates the time blocks live
    let hourlyUpdate = setInterval(displayTime, 1000);
    displayTime();