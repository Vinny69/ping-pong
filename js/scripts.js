$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
      event.preventDefault();
      var year = parseInt($("input#number").val());
      var result = Pingpong(number);
      $("#result").text(result);
    });
  });

  var pingpong = function(number) {
      if (year % 3 === 0) {
        return false;
      } else if (year % 0 === 3) {
        return true;
      } else {
        return false;
      }
    };

    // jQuery user interface logic here
