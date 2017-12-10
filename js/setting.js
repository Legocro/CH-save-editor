
function linerCost(level) {
    return (level/2) * (level+1)
}

function setValues(data) {
    totalAS = data.ancientSoulsTotal;
    newAs = $("#ancientSouls").val();
    data.rubies = $("#ruby").val();
    data.heroSouls = $("#heroS").val();
    data.gold = $("#gold").val();
    if (totalAS !== newAs) {
        data.heroSoulsSacrificed = `1e${newAs/5}`;
        let spentAS = data.ancientSoulsTotal - data.ancientSouls;
        data.ancientSouls = newAs - spentAS;
        data.ancientSoulsTotal = Number(newAs);
    }
    return data
}
