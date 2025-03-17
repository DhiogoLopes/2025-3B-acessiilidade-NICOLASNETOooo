const aumentaFonteBotao =document.getElementById('aumentar-fonte');
const diminurFonteBotao =document.getElementById('diminuir-fonte');

let tamanhoFonteAtual = 1;

aumentaFonteBotao.addEventListener('click', function(){
    tamanhoFonteAtual += 0.1
    document.body.style.fontSize = `${tamanhoFonteAtual}rem`
})

const diminuirFonteBotao =document.getElementById('diminuir-fonte');

let tamnhoFonteAtual = 1;

diminuirFonteBotao.addEventListener('click', function(){
    tamnhoFonteAtual -= 0.1
    document.body.style.fontSize = `${tamnhoFonteAtual}rem`
})