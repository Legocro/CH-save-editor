window.onload = function(){
	$("input[name = 'check']").on("change" , change);
	$(".blue").on("click" , onReadSave);
	$(".green").on("click" , outputSave)
	$("#decoded").on("change" , altOut);
	$("#rawsg").on("change" , altIn);
	$(".kappa").on("dblclick" , kappa);
}