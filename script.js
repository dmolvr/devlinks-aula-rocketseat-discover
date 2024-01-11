function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // versão simplificada

  // versão inteira do código
  // if (html.classList.contains ('light')) {
  //  html.classList.remove('light')
  // } else {
  //  html.classList.add('light')
  // }

  // tag img
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    // ações da tag image, substituição
    img.setAttribute(
      "src",
      "./assets/avatar-light(ProfilePictureMaker.com).png"
    )
  } else {
    // ações da tag img, modo dark
    img.setAttribute("src", "./assets/avatar-(ProfilePictureMaker.com).png")
  }

  // descrição da tag img
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Denner com cabelo alternativo, usando blusa acinzentada, em um fundo marrom"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Denner sorrindo usando camisa preta, barba e fundo branc"
    )
  }
}

function noEbook() {
  alert("Ih... Esqueci que eu não tenho um e-book...")
}
