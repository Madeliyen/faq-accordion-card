$(".question").on('click', function(e) {
  var questionID = e.target.id;
  if ($(".active").length > 0) {
    var activeQuestion = $(".active")[0].id;
    if (activeQuestion != questionID) {
      switch (activeQuestion) {
        case "q1":
          $("#q1").removeClass("active");
          $("#a1").slideUp();
          break;
        case "q2":
          $("#q2").removeClass("active");
          $("#a2").slideUp();
          break;
        case "q3":
          $("#q3").removeClass("active");
          $("#a3").slideUp();
          break;
        case "q4":
          $("#q4").removeClass("active");
          $("#a4").slideUp();
          break;
        case "q5":
          $("#q5").removeClass("active");
          $("#a5").slideUp();
          break;
      }
    }
  }

  switch (questionID) {
    case "q1":
      $("#q1").toggleClass("active");
      $("#a1").slideToggle();
      break;
    case "q2":
      $("#q2").toggleClass("active");
      $("#a2").slideToggle();
      break;
    case "q3":
      $("#q3").toggleClass("active");
      $("#a3").slideToggle();
      break;
    case "q4":
      $("#q4").toggleClass("active");
      $("#a4").slideToggle();
      break;
    case "q5":
      $("#q5").toggleClass("active");
      $("#a5").slideToggle();
      break;
  }

});
