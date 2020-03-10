function getParams() {
	
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;
function loginLoad(){
	// วิธีใช้ getParams()
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
	

}

function checkLogin(){
	var parameter = getParams();

   var news = document.forms["myLogin"]["username"].value;
   var newspass = document.forms["myLogin"]["password"].value;

   if(parameter["username"] == news && parameter["password"] == newspass)
   {
    alert ("successfully");
    return true;
       
   }
   else
   {
	alert ("username หรือ password ไม่ถูกต้อง");
    return false;
   }
}

			