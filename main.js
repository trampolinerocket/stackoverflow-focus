
// two-minute hack to promote focus on Stackoverflow
// e.g. remove the mostly ridiculous so-called 'hot network questions'
// this v0.0.1 does not block ad or job panel
// inspired by twitteropt/main.js via Andrej Karpathy
// https://karpathy.github.io/2013/11/23/chrome-extension-programming/
var stackoverflow_focus = function(){
  $('.hot-network-questions').hide();
  $('.text2jax_ignore').hide();
  $('.alternate').hide();
  $('.js-gps-track').hide();
  $('.favicon').hide();
  $('.module').hide();
}

stackoverflow_focus();

// fork of this blurb from AK's twitteropt, just because:

// List of VIP users. 
// We will highlight all tweets by these users!
var VIP = ['elonmusk']