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
  // },

  espanhol: {
    menu1: {
      menu1: "Solución",
      menu1Txt1: "Para gestores",
      menu1Txt2: "Vea las soluciones hechas para gestores de equipos en campo",
      menu1Txt3: "Para clientes",
      menu1Txt4: "Vea cómo auvo optimiza la gestión con sus clientes",
      menu1Txt5: "Gestión de equipos",
      menu1Txt6:
        "La gestión completa de su equipo externo, en la palma de su mano",
      menu1Txt7: "Auvo Pmoc",
      menu1Txt8:
        "Crea y acompañe todos los PMOCs de forma digital y profesional",
      menu1Txt9: "Auvo BI",
      menu1Txt10: "Monte un BI completo con todos los datos extraídos de Auvo",
      menu1Txt11: "Auvo Financeiro",
      menu1Txt12: "Toda la gestión financiera de su negocio en un único lugar",
      menu1Txt13: "Auvo Cobranza",
      menu1Txt14:
        "Cobranza automática y gestión integral de todos los contratos",
      menu1Txt15: "AuvoChat",
      menu1Txt16: "Atendimiento centralizado en un único número de whatsapp",
      menu1Txt17: "Auvo Reembolso",
      menu1Txt18:
        "El control de todos los reembolsos para cada miembro del equipo",
      menu1Txt19: "Menú",
      menu1Txt20: "Menú",
      menu1Txt21: "Menú",
      menu1Txt22: "Menú",
      menu1Txt23: "Menú",
      menu1Txt24: "Menú",
      menu1Txt25: "Menú",
      menu1Txt26: "Menú",
      menu1Txt27: "Menú",
    },

    menu2: {
      menu2: "Segmentos",
      menu2Txt1: "Climatizacion y refrigeracion",
      menu2Txt2: "Energía solar",
      menu2Txt3: "Asistencia técnica",
      menu2Txt4: "Facilities",
      menu2Txt5: "Seguridad electrónica",
      menu2Txt6: "Generacion de energia",
      menu2Txt7: "Mantenimiento",
    },
    menu3: {
      menu3: "Aprenda",
      menu3Txt1: "Blog",
      menu3Txt2: "Contenidos con los temas más relevantes de cada segmento",
      menu3Txt3: "Herramientas",
      menu3Txt4:
        "100% gratis y fáciles para usar en el crecimiento de su empresa",
      menu3Txt5: "Cursos",
      menu3Txt6:
        "Para que los gestores y equipos aprovechen lo mejor del sistema Auvo",
      menu3Txt7: "Materiales gratuitos",
      menu3Txt8: "Para descargar y profundizar en ebooks, infografías y otros",
      menu3Txt9: "Vídeos Aulas",
      menu3Txt10:
        "Consejos de aprendizaje sobre negocios, gestión, marketing y ventas",
    },

    menu4: {
      menu4: "Recomienda y Gana",
    },
  },
};

// Função para verificar a URL e definir o idioma
function verificarIdioma() {
  var url = window.location.href;

  if (url.indexOf("teste/") === 0) {
    // Definir conteúdo em espanhol

    var classMenu1 = document.querySelectorAll("[class*='menu1']");

    classMenu1.forEach((item) => {
      var nomeClasse = item.className;
      item.innerHTML = traducoes.espanhol.menu1[nomeClasse];
    });

    var classMenu2 = document.querySelectorAll("[class*='menu2']");

    classMenu2.forEach((item) => {
      var nomeClasse = item.className;
      item.innerHTML = traducoes.espanhol.menu2[nomeClasse];
    });

    var classMenu3 = document.querySelectorAll("[class*='menu3']");

    classMenu3.forEach((item) => {
      var nomeClasse = item.className;
      item.innerHTML = traducoes.espanhol.menu3[nomeClasse];
    });

    var classMenu4 = document.querySelectorAll("[class*='menu4']");

    classMenu4.forEach((item) => {
      var nomeClasse = item.className;
      item.innerHTML = traducoes.espanhol.menu4[nomeClasse];
    });
    // Adicione outras alterações necessárias para o idioma espanhol aqui
  }
}
// Get the link element by its ID
const indiqueEGanheLink = document.getElementById("indiqueEGanheLink");

// Function to handle the click event and redirect the user
function handleLinkClick(event) {
  event.preventDefault(); // Prevent the default behavior of the link
  const destinationURL = indiqueEGanheLink.getAttribute("href"); // Get the destination URL
  window.location.href = destinationURL; // Redirect the user to the destination URL
}

// Add a click event listener to the link
indiqueEGanheLink.addEventListener("click", handleLinkClick);
// Chamar a função quando a página carregar
window.onload = verificarIdioma;
