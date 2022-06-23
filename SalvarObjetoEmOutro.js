Object.keys(vars).forEach(x => {
    if (x != "userData1") {
        vars.userData1[x] = vars[x];
    }
});