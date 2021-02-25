$(document).ready(function () {
  //moment date and clock at top of page
  let today = moment();
  $("#currentDay").text(today.format("dddd, MMMM Do"));

  $(".saveBtn").on("click", function() {
    let value = $(this).siblings(".description").val();
    console.log(value);

    let time = $(this).siblings(".hour").attr("id");
    console.log(time);
    localStorage.setItem(time, value)
  })

  $(".nineAm").val(localStorage.getItem("9am"));
  $(".tenAm").val(localStorage.getItem("10am"));


//   moment time for time blocks
  let time = moment().format("h");
  console.log(time);
  function timeBlocks() {
//.each(.time-block) {
    //grab only numeric value from each time block (9am, 10am, etc)
    //remove "am" and convert into a number
    //let parseInt("string")

    // if else statement
    // if (each) block time < addClass(past) use (this)
    // if = present
    // else = future
// }
  }
});
