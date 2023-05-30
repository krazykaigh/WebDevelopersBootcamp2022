const tweetForm = document.querySelector("#tweetForm");
const tweetList = documnent.querySelector("#tweets");

tweetForm.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("Submitted the form!!");
  const userName = tweetForm.elements.userName;
  const inputTweet = tweetForm.elements.tweet;
  // Call the function appendTweets
  appendTweets(userName, inputTweet);
})

appendTweets = function(userName, inputTweet) {
  const newTweet = document.createElement("li");
  const userTag = document.createElement("b");
  userTag.append(userName);
  newTweet.append(userName);
  newTweet.append(` - ${inputTweet}`);
  tweetList.append(newTweet);
}