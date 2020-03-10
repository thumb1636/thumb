
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
   var pass = document.forms["myForm"]["password"].value;
   var repass = document.forms["myForm"]["repassword"].value;

   if(pass == repass)
   {
    alert ("successfully");
    return true;
       
   }
   else
   {
    var errortext = document.getElementById("errormsg");
    errortext.innerHTML = "รหัสไม่ตรงกัน";
    return false;
   }
}