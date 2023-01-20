const textoEntrada = document.querySelector('#input-texto');
const textoSaida = document.querySelector('#output');

const cripto = () => {

    let texto = textoEntrada.value;

    let resultadoCripto = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat')

    document.getElementById('output').innerHTML = `<textarea reandonly id="input-texto"> ${resultadoCripto}
    '</textarea> <button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>`
}

const descripto = () => {

    let texto = textoEntrada.value;

    let resultadoDescripto = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = `<textarea readonly id="input-texto"> ${resultadoDescripto}
    </textarea> <button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>`
}

const copiar = () => {

    let copiarTexto = document.getElementById('input-texto');

    copiarTexto.select();
    document.execCommand('copy');
    alert("Texto copiado")
}