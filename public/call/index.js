var count = 0;

$(".digit").on('click', function() {
  var num = ($(this).clone().children().remove().end().text());
  if (count < 12) {
    $("#output").append('<span>' + num.trim() + '</span>');

    count++
  }
});

$('.fa-long-arrow-left').on('click', function() {
  $('#output span:last-child').remove();
  count--;
});

$('.fa-phone').on('click', function() {
  var dial_num = document.getElementById("output").textContent;
  // call(dial_num);

  $.post("/call",
  {
    num: dial_num,
  },
  function(data, status){
    alert("Now calling");
    // alert("Data: " + data + "\nStatus: " + status);
    
  }).fail(function(response){
    alert('Error: ' + response.responseText)
  });

});
