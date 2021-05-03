
var score = 0;
var complete = 0;
var calculate = function(){
  for (i = 1; i <= 5; i++) {
    var response = $("input:radio[name=js"+i+"]:checked").val();
    score += parseInt(response);
    if (response != undefined) {
      complete += 1
    }
  } 
}
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    calculate();
    var message = ""
    var remark =""
    if (complete === 5) {
      message = "Your score is:";
      $("#display").text(score+"%").fadeIn();
      if (score <= 20) {
        $("#remark").append("<bad.png' alt='Bad'>");
      } else if (score <= 60) {
        $("#remark").append("<average.png' alt='Average'>");
      } else if (score <= 80) {
        $("#remark").append("<good.png' alt='Good'>");
      } else {
        $("#remark").append("<excellent.png' alt='Excellent!'>");
      }
    } else {
      message = "Please answer all the questions and submit again!";
    }
    $("#message").text(message);
    $(".carousel").remove();
    $("button.bg-success").fadeOut("slow");
    $("div.your-score").slideUp(50);
    $("div.your-score").slideDown(1500);
  }) 
})
function reload() {
  location.reload();
}

