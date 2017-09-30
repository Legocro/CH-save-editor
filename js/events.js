window.onload = function(){
	$("#mode").on("change" , change);
	$("#read").on("click" , onReadSave);
	$("#out").on("click" , outputSave)
	$("#decoded").on("change" , altOut);
	$("#rawsg").on("change" , altIn);
	$(".kappa").on("dblclick" , kappa);
}