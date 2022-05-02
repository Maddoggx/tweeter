const { format } = timeago;
const maxChar = 140;

$(document).ready(function () {

  const loadTweets = function () {
    $.get("/tweets")
      .then(function (data) {
        renderTweets(data)
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  $("form").submit(function (event) {
    event.preventDefault();
    const tweetTxt = $.trim($("#tweet-text").val());
const escapedText = escape(tweetTxt);
    if (tweetTxt !== escapedText) {
      $(".error-message").text("Invalid Input");
      $(".error-line").slideDown();
    }
    if (tweetTxt === "") {
      $(".error-message").text("Error Tweet field empty");
      $(".error-line").slideDown();
      return;
    }

    if (tweetTxt.length > maxChar) {
      $(".error-message").text("Character Limit Exceeded");
      $(".error-line").slideDown();
      return;
    }

    $.post("/tweets", $(this).serialize())
    .then((data) => {
      loadTweets();
    })

  });
  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      $("#card-container").prepend(createTweetElement(tweet));
    }
  }
  //document.getElementById("btn").addEventListener("click", renderTweets);

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };
  // const someString = "<script>alert('hi!');</script>";
  // $("form.someClass").text(someString);
  // const escape =  $("<form>").text(someString).html();

  const createTweetElement = function (tweet) {
    let timeago = format(tweet.created_at);
    let name = tweet.user.name;
    let image = tweet.user.avatars;
    let handle = tweet.user.handle;
    let content = tweet.content.text;
    let $tweet = `
<article class="card ">
<div>
<span class="right">${handle}</span>
<span> <img class="mb-5" src=${image}></span>
<span>${name}</span>
</div>
<div class="mb-5">
  <p>${content}</p>
  <footer>
    <div class="line"/>
    <div class="footer-trio">
      <div>
       ${timeago}
      </div>
      <div>
        <span><i class="fa-solid fa-flag icon-height"></i></span>
        <span><i class="fa-solid fa-retweet icon-height"></i></span>
        <span><i class="fa-regular fa-heart icon-height"></i></span>
      </div>
    </div>
  </footer>
</div>
</article>
`;
    return $tweet;
  }

  loadTweets();

});
// $(".tweet-button").click(event => {
//   $(".error-line").slideUp();
//   event.preventDefault();
//   const tweet = $("#tweet-text").val();
//   if (validateTweet(tweet)) {
//     postTweetAndRender("#tweet-text");
//   }
// });