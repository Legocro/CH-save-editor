window.onload = function(){
	$("#mode").on("change" , change);
	$("#decode").on("click" , onReadSave);
	$("#encode").on("click" , outputSave)
	$("#decoded").on("change" , altOut);
	$("#rawsg").on("change" , altIn);
	$(".kappa").on("dblclick" , kappa);
}