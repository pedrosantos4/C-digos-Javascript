var lista = ["loja", "estabelecimento", "lojinha", "barzinhos"];
var text = "";
var verificapj = vars.voz.match(/\d+/g);
vars.voz = vars.voz.replace("mil contra", "0001").replace("meia", "6").replace("meia dúzia", "6").replace("meia duzia", "6");
var regexCPF = new RegExp('([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})');
var regexCNPJ = new RegExp('[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\-?[ ]\/?[0-9]{4}\-?[ ]\-?[0-9]{2}');
var cpf = vars.voz.match(regexCPF);
var cnpj = vars.voz.match(regexCNPJ).join().replace(/ /g, "");
var validaCNPJ = cnpj.match(/[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/g);
lista.sort().forEach(estabelecimento => {
    if (vars.voz.indexOf(estabelecimento) >= 0) {
        text = vars.voz.substring(vars.voz.indexOf(estabelecimento))
    }
});
console.log(text, '\ncnpj: ', cnpj, '\ncpf: ', cpf);