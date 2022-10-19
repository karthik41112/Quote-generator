import { quote } from "./quotes.js";

var q = [];
async function getQuote() {
  const Qurl = "https://type.fit/api/quotes";
  const res = await fetch(Qurl);
  q = await res.json();
}

getQuote();
function rep(obj) {
  let n = Math.floor(Math.random() * obj.length);
  document.querySelector(".text").innerHTML = obj[n]["text"];
  document.querySelector(".author").innerHTML = obj[n]["author"];
}

function next() {
  if (q.length != 0) {
    rep(q);
    console.log(1);
  } else {
    rep(quote);
  }
}
next();

document.querySelector(".next").addEventListener("click", next, false);
// API=https://type.fit/api/quotes
// const proxy = "https://cors-anywhere.com/";
// "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonkey=457653";
