var gold, aSouls, souls, rubies, red, totalAs, newAs;
red = false;

function onReadSave() {
    let data = $("#input").val();
    displayValues(decode(data));
}

function outputSave() {
    let txt = $("#input").val();
    let data = decode(txt);
    if (invalidValues()){
        return null;
    }
    data = setValues(data);
    $("#output").val(encode(data));
}


function altIn() {
    console.log("Lol");
    let txt = $("#rawsg").val();
    $("#decoded").val((JSON.stringify(decode(txt), null, 4)));
}

function altOut() {
    let txt = $("#decoded").val();
    $("#rawsg").val(encode(txt));
}

function warning(){
    if (!localStorage.seenWarning){
        localStorage.seenWarning = true;
        $("#warning").click();
    }
}

