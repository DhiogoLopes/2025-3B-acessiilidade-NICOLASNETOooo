ducument.addEventListener('DOMContentLoaded' , function(){
    const botaoAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcpesAcessobilidade = document.getElementById('apresenta-lista');

botaoAcessibilidade.addEventListener('cliker', function(){
    botaoAcessibilidade.classList.toggle('rotacao-menu');
    opcoesAcessibilidade.classList.toggle('apresenta-lista');
})

const aumentaFonteBotao =document.getElementById('aumentar-fonte');
const diminurFonteBotao =document.getElementById('diminuir-fonte');
let tamanhoFonteAtual = 1;

aumentaFonteBotao.addEventListener('click', function(){
    tamanhoFonteAtual += 0.1
    document.body.style.fontSize = `${tamanhoFonteAtual}rem`
})

const diminuirFonteBotao =document.getElementById('diminuir-fonte');

diminuirFonteBotao.addEventListener('click', function(){
    tamanhoFonteAtual -= 0.1
    document.body.style.fontSize = `${tamanhoFonteAtual}rem`
})

})