var change = function(){
var check = document.getElementById("mode").checked;
if (check == true){
document.getElementById("indiv").style.visibility="hidden";
document.getElementById("outdiv").style.visibility="visible";
document.getElementById("rawsg").className="savetext"
document.getElementById("decoded").className="output"
}else{
document.getElementById("indiv").style.visibility="visible";
document.getElementById("outdiv").style.visibility="hidden";
document.getElementById("rawsg").className="";
document.getElementById("decoded").className="";
}
}
