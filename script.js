function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
  // versão simplificada

  // versão inteira do código
  // if (html.classList.contains ('light')) {
  //  html.classList.remove('light')
  // } else {
  //  html.classList.add('light')
  // } 

  // tag img
  const img = document.querySelector ("#profile img")
  
  
  if (html.classList.contains ('light')) {
   // ações da tag image, substituição 
  img.setAttribute('src', './assets/avatar-light.png')
  } else {
  // ações da tag img, modo dark
  img.setAttribute('src', './assets/avatar.png')
  }
  
  // descrição da tag img
  if (html.classList.contains ('light')) {
    img.setAttribute('alt', 'Foto de Mayk Brito sem barba, sorrindo, usando óculos escuros e jaqueta de couro, em um fundo azulado')
  } else {
    img.setAttribute('alt', 'Foto de Mayk Brito sorrindo usando óculos e camisa preta, barba e fundo alaranjado')
  }
  }
  
function noEbook() {
  alert("Ih... Esqueci que eu não tenho um e-book...")
}