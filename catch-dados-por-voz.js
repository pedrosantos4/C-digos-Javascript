var listaEstabelecimentos = ["loja", "estabelecimento", "lojinha", "barzinhos", "Salão de Beleza", "salao de beleza", "salao de belesa", "çalao de beleza", "mercadinho", "mercado", "super mercado", "supermercado", "hipermercado"];
vars.nomeLoja = "";
vars.voz = vars.voz.replace("mil contra", "0001").replace("meia", "6").replace("meia dúzia", "6").replace("meia duzia", "6");
//REGEX CPF
var regexCPF = new RegExp('([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})');
//REGEX CNPJ
var regexCNPJ = new RegExp('[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\-?[ ]\/?[0-9]{4}\-?[ ]\-?[0-9]{2}');
var cpf = vars.voz.match(regexCPF);
var cnpj = vars.voz.match(regexCNPJ).join().replace(/ /g, "");
vars.cpf = cpf[0];
listaEstabelecimentos.sort().forEach(estabelecimento => {
    if (vars.voz.indexOf(estabelecimento) >= 0) {
        vars.nomeLoja = vars.voz.substring(vars.voz.indexOf(estabelecimento));
    }
});