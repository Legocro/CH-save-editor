window.onload = function(){
	$("#classic").addClass("active in");
	$("#mode").on("change" , change);
	$("#read").on("click" , onReadSave);
	$("#out").on("click" , outputSave)
	$("#decoded").on("change" , altOut);
	$("#rawsg").on("change" , altIn);
	$("#clans").on("dblclick" , clans);
}