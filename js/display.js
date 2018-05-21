function displayValues(data) {
    souls = data.heroSouls;
    gold = data.gold;
    rubies = data.rubies;
    aSouls = data.ancientSoulsTotal
    $("#gold").val(gold)
    $("#heroS").val(souls)
    $("#ruby").val(rubies)
    $("#ancientSouls").val(aSouls);
}
function clans() {
    red = !red;
    $("#clans").toggleClass("text-warning");
}

function addWarning(id, message = "Error") {
    let element = $(`#${id}Cont`);
    element.addClass("has-warning");
    element.attr("data-original-title" , message);
    element.attr("data-toggle", "tooltip");
    element.tooltip();
}

function invalidValues() {
    const elements = {
        gold: $("#gold"),
        hs: $("#heroS"),
        ruby: $("#ruby"),
        as: $("#ancientSouls")
    };
    let invalid = false;
    for (let i in elements) {
        try {
            new Decimal(elements[i].val());
        } catch (e) {
            invalid = true;
            addWarning(elements[i].attr('id'), e.message);
            continue
        }
        removeWarning(elements[i][0].id);
    }
    return invalid;
}

function tabthing() {
    
}

function removeWarning(id){
    let el = $(`#${id}Cont`);
    if (!el.hasClass("has-warning")) return;
    el.toggleClass("has-warning").attr('data-toggle' , '').attr("title" , "").attr("data-original-title" , "");
}