//get name from user
let username;

document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log("Hello",username);
}