var xyl, chor, phan, borb, pony, moeru, souls, rubies , redkappa , old;
redkappa = true;

function onReadSave() {
    let data = $("#input").val();
    displayValues(decode(data));
}

function outputSave() {
    let txt = $("#input").val();
    let data = decode(txt);
    data = setValues(data);
    $("#output").val(encode(data));
}


function altIn() {
    let txt = $("#rawsg").val();
    $("#decoded").val((JSON.stringify(decode(txt))));
}

function altOut() {
    let txt = $("#decoded").val();
    $("#rawsg").val(encode(txt));
}





function setValues(data) {
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
    data.outsiders.outsiders[2].spentAncientSouls = (Math.floor(currentChor / 10) + 1) * (currentChor - 5 * Math.floor(currentChor / 10));
    data.outsiders.outsiders[3].spentAncientSouls = (currentPhan + 1) * (currentPhan / 2);
    data.outsiders.outsiders[4].spentAncientSouls = currentBorb;
    data.outsiders.outsiders[5].spentAncientSouls = currentPony;
    data.heroSouls = $("#heroS").val();
    data.gold = $("#gold").val();
    data.heroCollection.heroes[43].level = currentMoeru;
    data.heroCollection.heroes[43].epicLevel = currentMoeru;
    data.ancientSoulsSpent = currentXyl + currentBorb + currentPony + (currentPhan + 1) * (currentPhan / 2) + (Math.floor(currentChor / 10) + 1) * (currentChor - 5 * Math.floor(currentChor / 10));
    data.rubies = currentRubies;
    return data
}

