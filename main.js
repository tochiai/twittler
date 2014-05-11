$(document).ready(function(){
  var $body = $('body');
  var streamLength = 15;
  setInterval(function() {
    $(".tweet").remove();
    var index = streams.home.length - 1;
     while(index >= 0 && index > streams.home.length - streamLength ){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      var $tweet_author = $('<div class="tweet-author"></div>');
      var $tweet_content = $('<div class="tweet-content"></div>');
      var $tweet_timestamp = $('<div class="tweet-timestamp"></div>');
      $tweet_author.text('@' + tweet.user);
      $tweet_content.text(tweet.message );
      $tweet_timestamp.text(tweet.created_at);
      $tweet.append($tweet_author, $tweet_content, $tweet_timestamp);
      $tweet.appendTo($body);
      index -= 1;
    }
  }, 300);
});
