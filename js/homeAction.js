// // Obtendo o elemento com o id "section-8"
// var section = document.getElementById("section-8");

// // Obtendo a div com a classe "row-number-1" dentro do elemento "section-8"
// var div = section.querySelector(".row-number-1");

// // Removendo a classe "dnd-section" da div
// div.classList.remove("dnd-section");

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
document.addEventListener("DOMContentLoaded", function () {
  var words = document.querySelectorAll(".word");
  var currentWordIndex = 0;
  var previousWordIndex = words.length - 1;
  var wordInterval;

  function startAnimation() {
    wordInterval = setInterval(nextWord, 4000);
  }

  function nextWord() {
    words[currentWordIndex].classList.remove("active");
    words[previousWordIndex].classList.remove("previous");

    currentWordIndex = (currentWordIndex + 1) % words.length;
    previousWordIndex = (currentWordIndex - 1 + words.length) % words.length;

    words[currentWordIndex].classList.add("active");
    words[previousWordIndex].classList.add("previous");

    setTimeout(function () {
      words[previousWordIndex].classList.remove("active");
    }, 500);
  }

  startAnimation();

  // Reiniciar a animação quando a janela for redimensionada
  window.addEventListener("resize", function () {
    clearInterval(wordInterval);
    startAnimation();
  });
});

window.addEventListener("load", startTrasctions);

document.addEventListener("DOMContentLoaded", function () {
  var url = window.location.href;

  // Verificar se a URL corresponde à condição desejada
  if (url.includes("teste/")) {
    // Definir as traduções para o idioma espanhol

    var traducoes = {
      espanhol: {
        HomeBannerContent: {
          homeBannerContent_h1: "Recomienda y Gana",
          homeBannerContent_span1: "P 1 epanhol",
          homeBannerContent_span2: "P 2 epanhol",
          homeBannerContent_span3: "P 3 epanhol",
          homeBannerContent_p: "Recomienda y Gana",
          homeBannerContent_button: "Recomienda y Gana",
        },
      },
    };

    // Atualizar o conteúdo dos elementos <span> com base nas traduções em espanhol
    document.getElementById("homeBannerContent_h1").innerHTML =
      traducoes.espanhol.HomeBannerContent.homeBannerContent_h1;
    document.getElementById("span1").textContent =
      traducoes.espanhol.HomeBannerContent.homeBannerContent_span1;
    document.getElementById("span2").textContent =
      traducoes.espanhol.HomeBannerContent.homeBannerContent_span2;
    document.getElementById("span3").textContent =
      traducoes.espanhol.HomeBannerContent.homeBannerContent_span3;
    document.getElementById("homeBannerContent_p").innerHTML =
      traducoes.espanhol.HomeBannerContent.homeBannerContent_p;
    document.getElementById("homeBannerContent_button").innerHTML =
      traducoes.espanhol.HomeBannerContent.homeBannerContent_button;
  }
});
