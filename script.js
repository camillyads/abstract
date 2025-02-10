function toggleMode() {
  const hmtl = document.documentElement
  hmtl.classList.toggle("light")
  /*  if (hmtl.classList.contains("light")) {
    hmtl.classList.remove("light")
  } else {
    hmtl.classList.add("light")
  }*/

  //resumo: apenas o toggle ativa o que ta desativado e desativa o que esta ativo

  //pegar tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (hmtl.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
