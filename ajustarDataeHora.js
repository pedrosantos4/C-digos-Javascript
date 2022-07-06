var vars = {};
var hoje = new Date();
var dia = hoje.toISOString().split("T")[0].split("-")[2];
var ajustarMesPassado = hoje.toISOString().split("T")[0].split("-")[1] - 1;
var ano = hoje.toISOString().split("T")[0].split("-")[0];
    var today = new Date();
    var lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()-1, -1);
    var diaMesPassado = lastDayOfMonth.toISOString().split("T")[0].split("-")[2];
vars.tipoConsulta = "mes passado";
if (ajustarMesPassado.length > 1) {
    var mesPassado = ano + "-" + ajustarMesPassado + "-" + "01";
    var mesPassado1 = ano + "-" + ajustarMesPassado + "-" + diaMesPassado;
}
else 
    var mesPassado = ano + "-" + "0" + ajustarMesPassado + "-" + "01";
    var mesPassado1 = ano + "-" + "0" + ajustarMesPassado + "-" + diaMesPassado;
    vars.dataInicio = mesPassado;
    vars.dataFim = mesPassado1;
    console.log(`Data Início: ${vars.dataInicio}\nData Final: ${vars.dataFim}`);