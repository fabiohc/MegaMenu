let timer = 4000,
  images = document.querySelectorAll("#slider img");
imagesMobile = document.querySelectorAll("#sliderMobile img");
(currentImageIndex = 0), (maxImage = images.length);

function nextImage() {
  if (window.innerWidth > 750) {
    images[currentImageIndex].classList.remove("selected");
    currentImageIndex++;
    if (currentImageIndex >= maxImage) currentImageIndex = 0;
    images[currentImageIndex].classList.add("selected");
  } else {
    imagesMobile[currentImageIndex].classList.remove("selected");
    currentImageIndex++;
    if (currentImageIndex >= maxImage) currentImageIndex = 0;
    imagesMobile[currentImageIndex].classList.add("selected");
  }
}

function startTrasctions() {
  setInterval(() => {
    nextImage();
  }, timer);
}

// //Trasição de palavras MAQUINA DE DIGITAR
// $(document).ready(function () {
//   var e = [];
//   $(".main-title span").each(function () {
//     e.push($(this).text());
//   }),
//     new Typed(".main-title b", {
//       strings: e,
//       startDelay: 1e3,
//       typeSpeed: 80,
//       loop: !0,
//       fadeOut: !1,
//       shuffle: !1,

//       onBegin: function () {
//         $(".main-title").addClass("typed-start");
//       },
//     });
// });


// //Trasição de palavras tipo roleta
document.addEventListener("DOMContentLoaded", function() {
  var words = document.querySelectorAll(".word");
  var currentWordIndex = 0;
  var previousWordIndex = words.length - 1;
  var wordInterval;

  function startAnimation() {
    wordInterval = setInterval(nextWord, 3000);
  }

  function nextWord() {
    words[currentWordIndex].classList.remove("active");
    words[previousWordIndex].classList.remove("previous");

    currentWordIndex = (currentWordIndex + 1) % words.length;
    previousWordIndex = (currentWordIndex - 1 + words.length) % words.length;

    words[currentWordIndex].classList.add("active");
    words[previousWordIndex].classList.add("previous");

    setTimeout(function() {
      words[previousWordIndex].classList.remove("active");
    }, 500);
  }

  startAnimation();

  // Reiniciar a animação quando a janela for redimensionada
  window.addEventListener("resize", function() {
    clearInterval(wordInterval);
    startAnimation();
  });
});


window.addEventListener("load", startTrasctions);
