window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "15vw";
    document.getElementById("header").style.lineHeight = "13vw";
  } else {
    document.getElementById("header").style.fontSize = "60vw";
    document.getElementById("header").style.lineHeight = "50vw";
  }
}
