$(document).ready(function(){
  var $body = $('body');
  var $tweet_container = $('.tweet-container');
  var streamLength = 15;
  var updateTweets = function() {
    var index = streams.home.length - 1;
    var $currentTweet = $('.tweet').first();
     while(index >= 0 && index > streams.home.length - streamLength ){
      var tweet = streams.home[index];
      var $tweet_author = $('<div class="tweet-author"></div>');
      var $tweet_content = $('<div class="tweet-content"></div>');
      var $tweet_timestamp = $('<div class="tweet-timestamp"></div>');
      $tweet_author.text('@' + tweet.user);
      $tweet_content.text(tweet.message );
      $tweet_timestamp.text(tweet.created_at);
      $currentTweet.append($tweet_author, $tweet_content, $tweet_timestamp);
      index -= 1;
      $currentTweet = $currentTweet.next();
    }
  };
  var initialLength = Math.min(streamLength, streams.home.length);
  for (var i = 0; i < initialLength; i++) {
    $tweet_container.append("<div class='tweet'></div>");
  }
  updateTweets();
  setInterval(function() {
    $(".tweet").children().remove();
    updateTweets();
  }, 100);
});
