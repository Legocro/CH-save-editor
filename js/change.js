function change() {
    var check = document.getElementById("mode").checked;
    if (check == true) {
        document.getElementById("indiv").style.opacity = 0;
        document.getElementById("outdiv").style.opacity = 1;       		
        document.getElementById("outdiv").style.visibility = "visible"
        setTimeout(function(){
        	document.getElementById("indiv").style.visibility = "hidden"
        }, 1000)

        //document.getElementById("rawsg").className = "savetext"
        //document.getElementById("decoded").className = "output"
    } else {
        document.getElementById("indiv").style.opacity = 1;
        document.getElementById("outdiv").style.opacity = 0;        	
        document.getElementById("indiv").style.visibility = "visible"

        setTimeout(function(){
        	document.getElementById("outdiv").style.visibility = "hidden"

        }, 1000)
        //document.getElementById("rawsg").className = "";
        //document.getElementById("decoded").className = "";
    }
}