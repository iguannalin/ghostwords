window.addEventListener("load", () => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  let words = [];
  // text taken from Project Gutenberg Australia: http://gutenberg.net.au/ebooks02/0201091h.html
  fetch("https://annaylin.com/100-days/replace/waves.txt").then((file) => file.text()).then((d) => {
    words = d.split(" ");
    console.log(words);
  });
});