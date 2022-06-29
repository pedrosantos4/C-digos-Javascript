var cidade = "Florianópolis";
cidade = cidade.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase();
console.log(cidade);