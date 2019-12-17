
function add(dato){
	document.getElementById("pantalla").value += dato;	
}


function erase(){
	document.getElementById("pantalla").value = "";	
}

function resultado(){ 
let  res = "";
let screen = document.getElementById("pantalla").value;
    try {
        if (screen) {
			res = eval(screen)
		}
    }
    catch (error) {
        res = "ERROR";
    }   finally { 
		if (res == undefined) {
			res = "ERROR";
		}
	}
	document.getElementById("pantalla").value = res;
}	
function decimal() {
   let res = document.getElementById("pantalla").value;
   if(res.indexOf(".")!=-1){
       return false;
   } else {
   document.getElementById("pantalla").value = res + '.';
   }
   
}


	