
$(document).ready(function() {
  // $(".form_textarea").on('input', onInput)
  $(".btn").on('click', function() {
    const inputText = $("#tweet-text").val();
     //The this keyword is a reference to the button
  });
  $("#tweet-text").on('keyup', function() {
    const inputText = $("#tweet-text").val();
    let wordCount = inputText.length;
     const maxValue = 140;
     let results = maxValue - wordCount;
     let $counter = $("#counter").val(results);
     console.log(results);
     // let counter = $("#counter").val(results);
     //
     if (results <= -1) {
      $counter.addClass("red");
    }
    if (results >= 0) {
      $counter.removeClass("red");
    }
    });
});
// const onInput = function(event) {
//   let $input = $(this);
//   let len = $input.val().length;
//   lets charsleft = 140 -len;
//$form = $input.closest('form);
//$counter = $form
//   $('.counter').removeClass('from--red');
// }