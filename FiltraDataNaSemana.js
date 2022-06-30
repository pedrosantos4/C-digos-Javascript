vars = {};
const getLastDay = (data, day) => {
    while(data.getDay() != day){
        data.setDate(data.getDate() - 1);
    }
    return data;
};
var data = new Date();
data.setDate(data.getDate() - 1);
data = getLastDay(data, 0);
vars.dataFim = data.toISOString().split("T")[0];
data = getLastDay(data, 1);
vars.dataInicio = data.toISOString().split("T")[0];