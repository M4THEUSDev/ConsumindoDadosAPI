async function buscaEndereco(cep) {
    const mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        const consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const consultaCepConvertida = await consultaCEP.json();
        if (consultaCepConvertida.erro){
            throw Error('Cep não existente!');
        }
        const cidade = document.getElementById('cidade');
        const logradouro = document.getElementById('endereco');
        const estado = document.getElementById('estado');
        const bairro = document.getElementById('bairro');

        bairro.value = consultaCepConvertida.bairro;
        cidade.value = consultaCepConvertida.localidade;
        logradouro.value = consultaCepConvertida.logradouro;
        estado.value = consultaCepConvertida.uf;
        console.log(consultaCepConvertida);
        return consultaCepConvertida
    } catch (erro) {
        mensagemErro.innerHTML = `<p>Cep inválido. Tente novamente!</p>`
        console.log(erro)
    }
}


const cep = document.getElementById('cep')
cep.addEventListener("focusout" , () => buscaEndereco(cep.value));



















































// async function buscaEndereco(cep) {
//     var mensagemErro = document.getElementById('erro');
//     mensagemErro.innerHTML = "";
//     try {
//         var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
//         var consultaCEPConvertida = await consultaCEP.json();
//         if (consultaCEPConvertida.erro) {
//             throw Error('CEP não existente!');
//         }
//         var cidade = document.getElementById('cidade');
//         var logradouro = document.getElementById('endereco');
//         var estado = document.getElementById('estado');

//         cidade.value = consultaCEPConvertida.localidade;
//         logradouro.value = consultaCEPConvertida.logradouro;
//         estado.value = consultaCEPConvertida.uf;

//         console.log(consultaCEPConvertida);
//         return consultaCEPConvertida;
//     } catch (erro) {
//         mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
//         console.log(erro);
//     }
// }

// var cep = document.getElementById('cep');
// cep.addEventListener("focusout", () => buscaEndereco(cep.value));