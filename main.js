$(document).ready(function(){
  var $body = $('body');
  $body.html('');
  setInterval(function() {
    $(".tweet").remove();
    var index = streams.home.length - 1;
     while(index >= 0 && index > streams.home.length - 10 ){
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      $tweet.addClass("tweet");
      $tweet.text('@' + tweet.user + ': ' + tweet.message + "\n");
      $tweet.appendTo($body);
      index -= 1;
    }
  }, 300);
});