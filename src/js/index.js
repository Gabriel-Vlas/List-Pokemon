/* Função de troca de tema, adicinar classo dark-mode no body 
   mudar imagem para Lua
*/

// passo 1 - pegando no js o elemento html correspondente ao botão de troca de tema
const buttonAlterTheme = document.getElementById("button-alter-theme");

// passo 2 - pegar o elemento html correspondente ao body
const body = document.querySelector("body");

// variavel para botão lua
const imgButtonAlterTheme = document.querySelector(".img-button");

// passo 3 - Identificndo click no botão de troca de tema
buttonAlterTheme.addEventListener("click", () => {

    // metodo alterna entre dois modos
    body.classList.toggle("dark-mode");

    // verificando se ja tem o tema dark mode, remover a classe
    const darkModeActive = body.classList.contains("dark-mode");
    if (darkModeActive) {
        //remover classe dark mode
        //body.classList.remove("dark-mode");

        // trocar imagem do botão para sol
        imgButtonAlterTheme.setAttribute("src", "./imagens/sun.png")

    } else {
        //passo 4 - adicionar classo dark-mode no body
        //body.classList.add("dark-mode")

        //passo 5 - trocar botão de alterar tema para Lua
        imgButtonAlterTheme.setAttribute("src", "./imagens/moon.png")

    }
})