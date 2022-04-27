$(document).ready(function() {
  $(".btn").on('click', function() {
    const inputText = $("#tweet-text").val();
    alert(inputText.length); //The this keyword is a reference to the button
  });
  $("#tweet-text").on('keyup', function() {
    const inputText = $("#tweet-text").val();
    let wordCount = inputText.length;
     const maxValue = 140;
     let results = maxValue - wordCount;
      $("#counter").val(results);
     
  });

});