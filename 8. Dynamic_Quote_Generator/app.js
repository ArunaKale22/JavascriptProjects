const apiUrl = "https://api.quotable.io/random";
const newQuote = document.getElementById("quote");
const authorName = document.getElementById("author");

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  // console.log(data);
  newQuote.innerHTML = data.content;
  authorName.innerHTML = data.author;
}

getQuote(apiUrl);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" + newQuote.innerHTML + 
    "-----by" + " " + authorName.innerHTML,
    "Tweet Window",
    "width =600",
    "height=300"
  );
}

// function whatsapp(){
//     window.open("https://wa.me/whatsappphonenumber?text=newQuote.innerHTM" +
//     "-----by" + authorName.innerHTML,
//     "Tweet Window",
//     "width =600",
//     "height=300" 
// );
// }
