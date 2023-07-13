var cliente = document.getElementById("cliente"),
  empresa = document.getElementById("empresa"),
  aprendaElement = document.getElementById("aprenda"),
  listCliente = document.getElementById("list-cliente"),
  solucaoElement =
    ((aprendaElement = document.getElementById("aprenda")),
    document.getElementById("solucao")),
  dropdownMenuCliente = document.querySelector(".dropdown-menu-cliente"),
  dropdownMenuEmpresa = document.querySelector(".dropdown-menu-empresa"),
  dropdownMenuOption = document.querySelector(".option-solution");
efeito = document.querySelector(".efeito");
setaOption = document.querySelector(".seta");

// controla transição ao clicar na opção para empresa
document.getElementById("empresa").addEventListener("click", function (event) {
  event.preventDefault();
  var efeitoDiv = document.querySelector(".efeito");
  var optionDiv = document.querySelector("#empresa");
  dropdownMenuCliente.style.display = "none";
  dropdownMenuEmpresa.style.display = "block";
  // Verifica se a classe 'open' já está presente
  var isOpen = optionDiv.classList.contains("open");

  // Remove a classe 'open' de todas as opções
  var options = document.querySelectorAll(".option-solution");
  options.forEach(function (option) {
    option.classList.remove("open");
  });

  // Alterna a classe 'open' na opção clicada
  optionDiv.classList.toggle("open");

  // Ajusta a altura da div 'efeito' baseado na classe 'open'
  if (isOpen) {
    efeitoDiv.style.transform = "translateY(0px)";
  } else {
    efeitoDiv.style.transform = "translateY(0px)";
  }
});

// controla transição ao clicar na opção para clientes
document.getElementById("cliente").addEventListener("click", function (event) {
  event.preventDefault();
  var efeitoDiv = document.querySelector(".efeito");
  var optionDiv = document.querySelector("#cliente");
  var listcliente = document.querySelector("#list-cliente");

  // listcliente.style.transform = "opacity 0.9s ease";
  listcliente.style.opacity = "1";

  dropdownMenuCliente.style.display = "block";
  dropdownMenuEmpresa.style.display = "none";

  // Verifica se a classe 'open' já está presente
  var isOpen = optionDiv.classList.contains("open");

  // Remove a classe 'open' de todas as opções
  var options = document.querySelectorAll(".option-solution");
  options.forEach(function (option) {
    option.classList.remove("open");
  });

  // Alterna a classe 'open' na opção clicada
  optionDiv.classList.toggle("open");

  // Ajusta a altura da div 'efeito' baseado na classe 'open'
  if (isOpen) {
    efeitoDiv.style.transform = "translateY(125px)";
  } else {
    efeitoDiv.style.transform = "translateY(125px)";
  }
});

//Verifica url acessada e remove a cor da bandeira
window.addEventListener("DOMContentLoaded", function () {
  // Verificar a URL atual
  var currentURL = window.location.href;

  // Verificar se a URL corresponde à URL específica
  if (currentURL.includes("https://www.auvo.com/es-ar/")) {
    // Adicionar classe para remover a cor da imagem do Brasil
    var imgBrasil = document.getElementById("flag-brasil");
    imgBrasil.classList.add("grayscale-image");
  } else if (currentURL.includes("https://www.auvo.com/")) {
    // Adicionar classe para remover a cor da imagem da Espanha
    var imgEspanha = document.getElementById("flag-espanha");
    imgEspanha.classList.add("grayscale-image");
  }
});

 // Objeto com as traduções em diferentes idiomas
 var traducoes = {
  // portugues: {
  //   // menu1: "Slutesss",
  //   // menu1Txt1: "Título de la Página",
  //   // menu1Txt2: "Menú",
  //   // menu1Txt3: "Menú",
  //   // menu1Txt4: "Menú",
  //   // menu1Txt5: "Menú",
  //   // menu1Txt6: "Menú",
  //   // menu1Txt7: "Menú",
  //   // menu1Txt8: "Menú",
  //   // menu1Txt9: "Menú",
  //   // menu1Txt10: "Menú",
  //   // menu1Txt11: "Menú",
  //   // menu1Txt12: "Menú",
  //   // menu1Txt13: "Menú",
  //   // menu1Txt14: "Menú",
  //   // menu1Txt15: "Menú",
  //   // menu1Txt16: "Menú",
  //   // menu1Txt17: "Menú",
  //   // menu1Txt18: "Menú",
  //   // menu1Txt19: "Menú",
  //   // menu1Txt20: "Menú",
  //   // menu1Txt21: "Menú",
  //   // menu1Txt22: "Menú",
  //   // menu1Txt23: "Menú",
  //   // menu1Txt24: "Menú",
  //   // menu1Txt25: "Menú",
  //   // menu1Txt26: "Menú",
  //   // menu1Txt27: "Menú"   
  // },

  espanhol: {
    menu1: "Título de la Página",
    menu1Txt1: "Título de la Página",
    menu1Txt2: "Menú",
    menu1Txt3: "Menú",
    menu1Txt4: "Menú",
    menu1Txt5: "Menú",
    menu1Txt6: "Menú",
    menu1Txt7: "Menú",
    menu1Txt8: "Menú",
    menu1Txt9: "Menú",
    menu1Txt10: "Menú",
    menu1Txt11: "Menú",
    menu1Txt12: "Menú",
    menu1Txt13: "Menú",
    menu1Txt14: "Menú",
    menu1Txt15: "Menú",
    menu1Txt16: "Menú",
    menu1Txt17: "Menú",
    menu1Txt18: "Menú",
    menu1Txt19: "Menú",
    menu1Txt20: "Menú",
    menu1Txt21: "Menú",
    menu1Txt22: "Menú",
    menu1Txt23: "Menú",
    menu1Txt24: "Menú",
    menu1Txt25: "Menú",
    menu1Txt26: "Menú",
    menu1Txt27: "Menú"
  }
  // Adicione outras traduções necessárias aqui
};

// Função para verificar a URL e definir o idioma
function verificarIdioma() {
  var url = window.location.href;
  
  if (url.indexOf("http://127.0.0.1:5500") === 0) {
      // Definir conteúdo em espanhol
      document.getElementById("menu1").innerHTML = traducoes.espanhol.menu1;
      document.getElementById("menu1Txt1").innerHTML = traducoes.espanhol.menu1Txt1;
      document.getElementById("menu1Txt2").innerHTML = traducoes.espanhol.menu1Txt2;
      document.getElementById("menu1Txt3").innerHTML = traducoes.espanhol.menu1Txt3;
      document.getElementById("menu1Txt4").innerHTML = traducoes.espanhol.menu1Txt4;
      document.getElementById("menu1Txt5").innerHTML = traducoes.espanhol.menu1Txt5;
      document.getElementById("menu1Txt6").innerHTML = traducoes.espanhol.menu1Txt6;
      document.getElementById("menu1Txt7").innerHTML = traducoes.espanhol.menu1Txt7;
      document.getElementById("menu1Txt8").innerHTML = traducoes.espanhol.menu1Txt8;
      document.getElementById("menu1Txt9").innerHTML = traducoes.espanhol.menu1Txt9;
      document.getElementById("menu1Txt10").innerHTML = traducoes.espanhol.menu1Txt10;
      document.getElementById("menu1Txt11").innerHTML = traducoes.espanhol.menu1Txt11;
      document.getElementById("menu1Txt12").innerHTML = traducoes.espanhol.menu1Txt12;
      document.getElementById("menu1Txt13").innerHTML = traducoes.espanhol.menu1Txt13;
      document.getElementById("menu1Txt14").innerHTML = traducoes.espanhol.menu1Txt14;
      document.getElementById("menu1Txt15").innerHTML = traducoes.espanhol.menu1Txt15;
      document.getElementById("menu1Txt16").innerHTML = traducoes.espanhol.menu1Txt16;
      document.getElementById("menu1Txt17").innerHTML = traducoes.espanhol.menu1Txt17;
      document.getElementById("menu1Txt18").innerHTML = traducoes.espanhol.menu1Txt18;
      document.getElementById("menu1Txt19").innerHTML = traducoes.espanhol.menu1Txt19;
      document.getElementById("menu1Txt20").innerHTML = traducoes.espanhol.menu1Txt20;
      document.getElementById("menu1Txt21").innerHTML = traducoes.espanhol.menu1Txt21;
      document.getElementById("menu1Txt22").innerHTML = traducoes.espanhol.menu1Txt22;
      document.getElementById("menu1Txt23").innerHTML = traducoes.espanhol.menu1Txt23;
      document.getElementById("menu1Txt24").innerHTML = traducoes.espanhol.menu1Txt24;
      document.getElementById("menu1Txt25").innerHTML = traducoes.espanhol.menu1Txt25;
      document.getElementById("menu1Txt26").innerHTML = traducoes.espanhol.menu1Txt26;
      document.getElementById("menu1Txt27").innerHTML = traducoes.espanhol.menu1Txt27;
     
      // Adicione outras alterações necessárias para o idioma espanhol aqui
   }
   // else {
  //     // Definir conteúdo em português (padrão)
  //     document.getElementById("titulo").innerHTML = traducoes.portugues.titulo;
  //     document.getElementById("menu").innerHTML = traducoes.portugues.menu;
  //     // Adicione outras alterações necessárias para o idioma português aqui
  // }
}

// Chamar a função quando a página carregar
window.onload = verificarIdioma;
