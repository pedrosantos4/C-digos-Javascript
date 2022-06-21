var  msgTxt;
var  i;
var  e;
var response = ({
    "data": {
        "cube": [
            {
                "baseProspeccao": {
                    "cnpjCompleto": "01174574000149",
                    "nome": "Texano Grill - Beiramar",
                    "logradouro": "BOCAIUVA",
                    "razaoSocial": "TEXANO GRILL COMERCIO DE REFEICOES EIRELI",
                    "bairroEstabelecimentos": "CENTRO",
                    "perfilIfood": "SIM",
                    "tipoLogradouro": "RUA",
                    "temIfood": "SIM",
                    "cidade": "FLORIANOPOLIS",
                    "nomeFantasiaEstabelecimentos": "TEXANO GRILL",
                    "numero": "2468"
                }
            },
            {
                "baseProspeccao": {
                    "cnpjCompleto": "01477466000145",
                    "nome": "Chickens do Méqui (mar)",
                    "logradouro": "BOCAIUVA",
                    "razaoSocial": "BETTER COMERCIO DE ALIMENTOS LTDA",
                    "bairroEstabelecimentos": "CENTRO",
                    "perfilIfood": "SIM",
                    "tipoLogradouro": "RUA",
                    "temIfood": "SIM",
                    "cidade": "FLORIANOPOLIS",
                    "nomeFantasiaEstabelecimentos": null,
                    "numero": "2468"
                }
            },
            {
                "baseProspeccao": {
                    "cnpjCompleto": "07014351000109",
                    "nome": "Japex Sushi - Beiramar Shopping",
                    "logradouro": "BOCAIUVA",
                    "razaoSocial": "JAPEX RESTAURANTE LTDA",
                    "bairroEstabelecimentos": "CENTRO",
                    "perfilIfood": "SIM",
                    "tipoLogradouro": "RUA",
                    "temIfood": "SIM",
                    "cidade": "FLORIANOPOLIS",
                    "nomeFantasiaEstabelecimentos": "JAPEX",
                    "numero": "2468"
                }
            },
            {
                "baseProspeccao": {
                    "cnpjCompleto": "07524009000140",
                    "nome": "Solopizza Beiramar Shopping",
                    "logradouro": "BOCAIUVA",
                    "razaoSocial": "ARBOREA COMERCIO DE ALIMENTOS LTDA",
                    "bairroEstabelecimentos": "CENTRO",
                    "perfilIfood": "SIM",
                    "tipoLogradouro": "RUA",
                    "temIfood": "SIM",
                    "cidade": "FLORIANOPOLIS",
                    "nomeFantasiaEstabelecimentos": "SOLOPIZZA",
                    "numero": "2468"
                }
            },
            {
                "baseProspeccao": {
                    "cnpjCompleto": "09039084000141",
                    "nome": "Unika Bar",
                    "logradouro": "BOCAIUVA",
                    "razaoSocial": "CATARINA COMERCIO VAREJISTA DE BEBIDAS LTDA",
                    "bairroEstabelecimentos": "CENTRO",
                    "perfilIfood": "SIM",
                    "tipoLogradouro": "RUA",
                    "temIfood": "SIM",
                    "cidade": "FLORIANOPOLIS",
                    "nomeFantasiaEstabelecimentos": "UNIKA BAR",
                    "numero": "2468"
                }
            },
            {
                "baseProspeccao": {
                    "cnpjCompleto": "09184642000162",
                    "nome": "Artusi Ristorante",
                    "logradouro": "BOCAIUVA",
                    "razaoSocial": "ARTUSI RESTAURANTE EIRELI",
                    "bairroEstabelecimentos": "CENTRO",
                    "perfilIfood": "SIM",
                    "tipoLogradouro": "RUA",
                    "temIfood": "SIM",
                    "cidade": "FLORIANOPOLIS",
                    "nomeFantasiaEstabelecimentos": "ARTUSI RISTORANTE",
                    "numero": "2090"
                }
            },
            {
                "baseProspeccao": {
                    "cnpjCompleto": "09722724000113",
                    "nome": "Mini Kalzone- Shop Beiramar",
                    "logradouro": "BOCAIUVA",
                    "razaoSocial": "CNF COMERCIO DE ALIMENTOS EIRELI",
                    "bairroEstabelecimentos": "CENTRO",
                    "perfilIfood": "SIM",
                    "tipoLogradouro": "RUA",
                    "temIfood": "SIM",
                    "cidade": "FLORIANOPOLIS",
                    "nomeFantasiaEstabelecimentos": "MINI KALZONE",
                    "numero": "2468"
                }
            },
            {
                "baseProspeccao": {
                    "cnpjCompleto": "10696331000161",
                    "nome": "10 Pastéis - Shop. Beira Mar",
                    "logradouro": "BOCAIUVA",
                    "razaoSocial": "HOLLWEG COMERCIO DE ALIMENTOS LTDA",
                    "bairroEstabelecimentos": "CENTRO",
                    "perfilIfood": "SIM",
                    "tipoLogradouro": "RUA",
                    "temIfood": "SIM",
                    "cidade": "FLORIANOPOLIS",
                    "nomeFantasiaEstabelecimentos": "10 PASTEIS",
                    "numero": "2468"
                }
            },
            {
                "baseProspeccao": {
                    "cnpjCompleto": "11377588008289",
                    "nome": "Burger King - Beira Mar",
                    "logradouro": "BOCAIUVA",
                    "razaoSocial": "ADISER COMERCIO DE ALIMENTOS LTDA",
                    "bairroEstabelecimentos": "CENTRO",
                    "perfilIfood": "SIM",
                    "tipoLogradouro": "RUA",
                    "temIfood": "SIM",
                    "cidade": "FLORIANOPOLIS",
                    "nomeFantasiaEstabelecimentos": null,
                    "numero": "2468"
                }
            },
            {
                "baseProspeccao": {
                    "cnpjCompleto": "13442509000136",
                    "nome": "Vivenda do Camarão - Beiramar Shopping",
                    "logradouro": "BOCAIUVA",
                    "razaoSocial": "MAR BRASIL FLORIPA CENTRO COMERCIO DE ALIMENTOS EIRELI",
                    "bairroEstabelecimentos": "CENTRO",
                    "perfilIfood": "SIM",
                    "tipoLogradouro": "RUA",
                    "temIfood": "SIM",
                    "cidade": "FLORIANOPOLIS",
                    "nomeFantasiaEstabelecimentos": "VIVENDA DO CAMARAO",
                    "numero": "2468"
                }
            },
            {
                "baseProspeccao": {
                    "cnpjCompleto": "17261661004675",
                    "nome": "Aussie Grill - Beiramar Shopping",
                    "logradouro": "BOCAIUVA",
                    "razaoSocial": "OUTBACK STEAKHOUSE RESTAURANTES BRASIL S.A.",
                    "bairroEstabelecimentos": "CENTRO",
                    "perfilIfood": "SIM",
                    "tipoLogradouro": "RUA",
                    "temIfood": "SIM",
                    "cidade": "FLORIANOPOLIS",
                    "nomeFantasiaEstabelecimentos": "OUTBACK STEAKHOUSE",
                    "numero": "2468"
                }
            },
            {
                "baseProspeccao": {
                    "cnpjCompleto": "17795186000115",
                    "nome": "Griletto - Beiramar Shopping",
                    "logradouro": "BOCAIUVA",
                    "razaoSocial": "RK2C GRILL - RESTAURANTE LTDA",
                    "bairroEstabelecimentos": "CENTRO",
                    "perfilIfood": "SIM",
                    "tipoLogradouro": "RUA",
                    "temIfood": "SIM",
                    "cidade": "FLORIANOPOLIS",
                    "nomeFantasiaEstabelecimentos": null,
                    "numero": "2468"
                }
            },
            {
                "baseProspeccao": {
                    "cnpjCompleto": "20151603000100",
                    "nome": "Tre Matti Pizzaria & Trattoria Italiana",
                    "logradouro": "BOCAIUVA",
                    "razaoSocial": "CAFE.COM ITALIA LTDA",
                    "bairroEstabelecimentos": "CENTRO",
                    "perfilIfood": "SIM",
                    "tipoLogradouro": "RUA",
                    "temIfood": "SIM",
                    "cidade": "FLORIANOPOLIS",
                    "nomeFantasiaEstabelecimentos": "AZDORA PIADINERIA BEIRAMAR",
                    "numero": "2468"
                }
            },
            {
                "baseProspeccao": {
                    "cnpjCompleto": "22507663000130",
                    "nome": "Só Porções ",
                    "logradouro": "BOCAIUVA",
                    "razaoSocial": "CARLOS ABDUL AMIR TARRAF RESTAURANTE LTDA",
                    "bairroEstabelecimentos": "CENTRO",
                    "perfilIfood": "SIM",
                    "tipoLogradouro": "RUA",
                    "temIfood": "SIM",
                    "cidade": "FLORIANOPOLIS",
                    "nomeFantasiaEstabelecimentos": null,
                    "numero": "2468"
                }
            }
        ]
    }
}
);
var lista = response.data.cube;
var msgTxt = '';
for (i = 0; i < vars.userData1.lista.length - 1; i++) {
    e = (vars.userData1.lista[i]);
    entity(encodeURIComponent(JSON.stringify(e)), (i+1).toString(), `${i+1} - ${e.baseProspeccao.nome} ${e.baseProspeccao.cnpjCompleto} ${e.baseProspeccao.logradouro} ${e.baseProspeccao.razaoSocial} ${e.baseProspeccao.bairro} ${e.baseProspeccao.numero}`);
    if (i < 10) {
      msgTxt += `*${i+1}* - *Estabelecimento:* ${e.baseProspeccao.nome}\n*Endereço:* ${e.baseProspeccao.logradouro} *Nº:* ${e.baseProspeccao.numero}\n\n`;
    }
  }
  msg(`Qual dos estabelecimentos abaixo iremos visitar?\n\n${msgTxt}\n*0* - Ver mais\n\nDigite o *NÚMERO* correspondente.`,'text');




  msgTxt = '';
  for (i = 0; i < vars.userData1.lista.length - 1; i++) {
      e = (vars.userData1.lista[i]);
      entity(encodeURIComponent(JSON.stringify(e)), (i+1).toString(), `${i+1} - ${e.baseProspeccao.nome} ${e.baseProspeccao.cnpjCompleto} ${e.baseProspeccao.logradouro} ${e.baseProspeccao.razaoSocial} ${e.baseProspeccao.bairro} ${e.baseProspeccao.numero}`);
        msgTxt += `*${i+1}* - *Estabelecimento:* ${e.baseProspeccao.nome}\n*Endereço:* ${e.baseProspeccao.logradouro} *Nº:* ${e.baseProspeccao.numero}\n\n`;
    }
    msg(`Qual dos estabelecimentos abaixo iremos visitar?\n\n${msgTxt}\nDigite o *NÚMERO* correspondente.`,'text');