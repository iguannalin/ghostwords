window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  let words = [];
  let int;
  let poem = [];
  let r = getRandomInt(7, 20);
  const left = document.getElementById("left");
  const right = document.getElementById("right");

  function typewrite() {
    if (r > 0) {
      let rword = words[getRandomInt(0, words.length)];
      while (poem.includes(rword)) rword = words[getRandomInt(0, words.length)];
      poem.push(rword);
      let wt = 0;
      rword.split("").forEach((l, index) => {
        setTimeout(() => {
          if (index == rword.length - 1) l += "&nbsp;";
          left.innerHTML += l;
          right.innerHTML += l;
          left.style.maxWidth = "50%";
          right.style.maxWidth = "50%";
        }, wt+=getRandomInt(75, 250));
      });
      r--;
    } else {
      clearInterval(int);
    }
  }

  // i took an array of all the words from Virginia Woolf's The Waves, and extracted a total of 41 words that were palindromes
  // The Waves text taken from Project Gutenberg Australia: http://gutenberg.net.au/ebooks02/0201091h.html
  fetch("ghosts.json").then((file) => file.json()).then((d) => {
    words = d;
  });

  int = setInterval(() => {
    typewrite();
    if (Math.random()>0.4) {
      left.innerHTML += "<br>";
      right.innerHTML += "<br>";
    }
  }, 1200);
});

// let arrA = [];
// let arrB = [];
// temp1.forEach((w) => {
//     if (w.length < 1) return;
//     let reversed = w.split("").reduce((acc, char) => char + acc, "");
//   if (!arrA.includes(reversed)) {
//       arrA.push(w);
//   } else if (!arrB.includes(w)) { // if reverse has been seen once, but first time seeing word
//       arrB.push(w);
//       console.log(w);
//   } else {
//       arrA.push(w);
//   }
// })