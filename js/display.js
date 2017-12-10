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
function clans(){
    red = !red;
    $("#clans").toggleClass("text-warning");
}
