msgTxt = '';
for (i = 0; i < vars.userData1.lista.length - 1; i++) {
    e = (vars.userData1.lista[i]);
    entity(encodeURIComponent(JSON.stringify(e)), (i+1).toString(), `${i+1} - ${e.baseProspeccao.nome} ${e.baseProspeccao.cnpjCompleto} ${e.baseProspeccao.logradouro} ${e.baseProspeccao.razaoSocial} ${e.baseProspeccao.bairro} ${e.baseProspeccao.numero}`);
    if (i < 15) {
      msgTxt += `*${i+1}* - *Estabelecimento:* ${e.baseProspeccao.nome}\n*Endereço:* ${e.baseProspeccao.logradouro} *Nº:* ${e.baseProspeccao.numero}\n\n`;
    }
  }
msg(`Qual dos estabelecimentos abaixo iremos visitar?\n\n${msgTxt}\n*0* - Ver mais\n\nDigite o *NÚMERO* correspondente.`,'text');






