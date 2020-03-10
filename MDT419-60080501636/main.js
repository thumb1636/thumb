var click = 1;

function postFunction (){
    var textInput = document.getElementById("text1").value;
    if(click == 1)
    {
    var post = document.getElementById("post1");
    post.innerHTML = textInput;
    }
    else if (click==2)
    {
    var replyt1 = document.getElementById("reply1");
    replyt1.innerHTML = textInput;
    }
    else
    {
    var replyt2 = document.getElementById("reply2");
    replyt2.innerHTML = textInput;
    }
    click +=1;
}
function clearFunction(){
    
    click = 1;

        var post = document.getElementById("post1");
        post.innerHTML = "";
        
        var replyt1 = document.getElementById("reply1");
        replyt1.innerHTML = "";
        
        var replyt2 = document.getElementById("reply2");
        replyt2.innerHTML = ""; 

}


