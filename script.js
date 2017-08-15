var xyl, chor, phan, borb, pony, moeru, souls, rubies , redkappa , old ;
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
