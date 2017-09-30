
function setValues(data){
    let borb = document.getElementById("hail").style.opacity == "0";
    return borb ? setNewValues(data) : setOldValues(data);
}


function phanCost(level) {
    return (level/2) * (level+1)
}

function chorCost(level) {
    return (Math.floor(level / 10) + 1) * (level - 5 * Math.floor(level / 10))
}



function setOldValues(data) {
    let currentRubies = $("#ruby").val();
    let currentPhan = parseFloat($("#phan").val());
    let currentChor = parseFloat($("#chor").val());
    let currentXyl = parseFloat($("#xyl").val());
    let currentBorb = parseFloat($("#borb").val());
    let currentPony = parseFloat($("#pony").val())
    let currentMoeru = $("#moeru").val();
    data.outsiders.outsiders[1].level = currentXyl;
    data.outsiders.outsiders[2].level = currentChor;
    data.outsiders.outsiders[3].level = currentPhan;
    data.outsiders.outsiders[4].level = currentBorb;
    data.outsiders.outsiders[5].level = currentPony;
    data.outsiders.outsiders[1].spentAncientSouls = currentXyl;
    data.outsiders.outsiders[2].spentAncientSouls = chorCost(currentChor);
    data.outsiders.outsiders[3].spentAncientSouls = phanCost(currentPhan);
    data.outsiders.outsiders[4].spentAncientSouls = currentBorb;
    data.outsiders.outsiders[5].spentAncientSouls = currentPony;
    data.heroSouls = $("#heroS").val();
    data.gold = $("#gold").val();
    data.heroCollection.heroes[43].level = currentMoeru;
    data.heroCollection.heroes[43].epicLevel = currentMoeru;
    data.ancientSoulsSpent = currentXyl +  currentPony + currentBorb + phanCost(currentPhan) + chorCost(currentChor);
    data.ancientSoulsTotal = data.ancientSouls + data.ancientSoulsSpent;
    data.rubies = currentRubies;
    return data
}


function setNewValues(data) {
    let currentRubies = $("#ruby").val();
    let currentPhan = parseFloat($("#phan").val());
    let currentChor = parseFloat($("#chor").val());
    let currentXyl = parseFloat($("#xyl").val());
    //let currentBorb = parseFloat($("#borb").val());
    let currentPony = parseFloat($("#pony").val())
    let currentMoeru = $("#moeru").val();
    data.outsiders.outsiders[1].level = currentXyl;
    data.outsiders.outsiders[2].level = currentChor;
    data.outsiders.outsiders[3].level = currentPhan;
    data.outsiders.outsiders[5].level = currentPony;
    data.outsiders.outsiders[1].spentAncientSouls = phanCost(currentXyl)
    data.outsiders.outsiders[2].spentAncientSouls = phanCost(currentChor);
    data.outsiders.outsiders[3].spentAncientSouls = phanCost(currentPhan);
    data.outsiders.outsiders[5].spentAncientSouls = phanCost(currentPony);
    data.heroSouls = $("#heroS").val();
    data.gold = $("#gold").val();
    data.heroCollection.heroes[43].level = currentMoeru;
    data.heroCollection.heroes[43].epicLevel = currentMoeru;
    data.ancientSoulsSpent = phanCost(currentXyl) +  phanCost(currentPony) + phanCost(currentPhan) + phanCost(currentChor);
    data.ancientSoulsTotal = data.ancientSouls + data.ancientSoulsSpent;
    data.rubies = currentRubies;
    return data
}

