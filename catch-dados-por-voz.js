var vars = {};
vars.voz = "lojinha do seu zé, cpf 08787895455 e o cnpj é 79646701 0001 52, o email é pedro.santos4@zazvendas.com.br, o nome do cliente é Pedro Henrique Félix dos Santos e o celular dele é 11952264969";
var listaEstabelecimentos = ["loja", "estabelecimento", "lojinha", "barzinhos", "Salão de Beleza", "salao de beleza", "salao de belesa", "çalao de beleza", "mercadinho", "mercado", "super mercado", "supermercado", "hipermercado"];
vars.nomeLoja = "";
vars.voz = vars.voz.replace("mil contra", "0001").replace("meia", "6").replace("meia dúzia", "6").replace("meia duzia", "6");
var regexCPF = new RegExp('([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})');
var regexCNPJ = new RegExp('[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\-?[ ]\/?[0-9]{4}\-?[ ]\-?[0-9]{2}');
var regexEMAIL = new RegExp('([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)');
var cpf = vars.voz.match(regexCPF);
var cnpj = vars.voz.match(regexCNPJ).join().replace(/ /g, "");
vars.cpf = cpf[0];
vars.cpcEmail = vars.voz.match(regexEMAIL)[0];
listaEstabelecimentos.sort().forEach(estabelecimento => {
    if (vars.voz.indexOf(estabelecimento) >= 0) {
        vars.nomeLoja = vars.voz.substring(vars.voz.indexOf(estabelecimento));
    }
});