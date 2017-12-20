
function linearCost(level) {
    return (level/2) * (level+1)
}

function setValues(data) {
    totalAS = data.ancientSoulsTotal;
    newAs = $("#ancientSouls").val();
    data.rubies = $("#ruby").val();
    data.heroSouls = $("#heroS").val();
    data.gold = $("#gold").val();
    if (totalAS !== newAs) {
        data.heroSoulsSacrificed = new Decimal(10).pow(newAS/5).toPrecision(4).replace("+" , "");
        let spentAS = data.ancientSoulsTotal - data.ancientSouls;
        data.ancientSouls = newAs - spentAS;
        data.ancientSoulsTotal = Number(newAs);
    }
    return data
}
