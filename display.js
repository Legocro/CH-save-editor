function displayValues(data) {
    xyl = data.outsiders.outsiders[1].level;
    chor = data.outsiders.outsiders[2].level;
    phan = data.outsiders.outsiders[3].level;
    borb = data.outsiders.outsiders[4].level;
    pony = data.outsiders.outsiders[5].level;
    souls = data.heroSouls;
    gold = data.gold;
    moeru = data.heroCollection.heroes[43].epicLevel;
    rubies = data.rubies;
    $("#xyl").val(xyl)
    $("#chor").val(chor)
    $("#phan").val(phan)
    $("#borb").val(borb)
    $("#pony").val(pony)
    $("#gold").val(gold)
    $("#heroS").val(souls)
    $("#moeru").val(moeru)
    $("#ruby").val(rubies)
}

function kappa(){
    let link;
    link = redkappa ? "https://i.imgur.com/4bFjcVL.png" : "https://i.imgur.com/Hawb3it.png";
    redkappa = !redkappa;
    $(".kappa").attr("src" , link);
}

function removeBorb() {
    let borb = document.getElementById("hail").style;
    borb.opacity = 0;
    borb.disabled = true;
}

function addBorb(){
    let borb = document.getElementById("hail").style;
    borb.opacity = 1;
    borb.disabled = false;

}