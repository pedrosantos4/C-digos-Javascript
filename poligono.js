var resp;
var msgTxt;
var query = {
    "query": "query CubeQuery {  cube(where: {baseProspeccao: {logradouro: {equals: \"BOCAIUVA\"}, temIfood:{equals: \"SIM\"} } } ) {    baseProspeccao(orderBy: {count: desc}) {cnpjCompleto      nome      logradouro      razaoSocial      bairroEstabelecimentos      perfilIfood      tipoLogradouro      temIfood      cidade      nomeFantasiaEstabelecimentos      numero    }  } }",
    "operationName": "CubeQuery"
};
vars.userData1 = {};
msg('START', 'text');
resp = (await request('POST', 'https://api-hub-dev.zaz.vc/zaz/cubejs/graphql?apikey=b1fcea2c-d3a6-11eb-b8bc-0242ac130003', query, null, false, false));
msg('END', 'text');
vars.userData1.lista = resp.data.cube;
for (i = 0; i < vars.userData1.lista.length - 1; i++) {
    e = (vars.userData1.lista[i]);
    entity(encodeURIComponent(JSON.stringify(e)), (i+1).toString(), `${i+1} - ${e.baseProspeccao.nome} ${e.baseProspeccao.cnpjCompleto} ${e.baseProspeccao.logradouro} ${e.baseProspeccao.razaoSocial} ${e.baseProspeccao.bairro} ${e.baseProspeccao.numero}`);
    if (i < 10) {
      msgTxt += `*${i+1}* - *Estabelecimento:* ${e.baseProspeccao.nome}\n*Endereço:* ${e.baseProspeccao.logradouro} *Nº:* ${e.baseProspeccao.numero}\n\n`;
    }
  }
msg(`Qual dos estabelecimentos abaixo iremos visitar?\n\n${msgTxt}\n*0* - Ver mais\n\nDigite o *NÚMERO* correspondente.`,'text');