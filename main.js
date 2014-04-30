$(document).ready(function(){
  var $body = $('body');
  $body.html('');
  setInterval(function() {
    $(".tweet").remove();
    var index = streams.home.length - 1;
     while(index >= 0 && index > streams.home.length - 10 ){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      var $tweet_content = $('<div class="tweet-content"></div>');
      var $tweet_timestamp = $('<div class="tweet-timestamp"></div>');
      $tweet_content.text('@' + tweet.user + ': ' + tweet.message );
      $tweet_timestamp.text(tweet.created_at);
      $tweet.append($tweet_content, $tweet_timestamp);
      $tweet.appendTo($body);
      index -= 1;
    }
  }, 300);
});