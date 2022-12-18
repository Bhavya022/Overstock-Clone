
function signup(e){
   event.preventDefault();
   //console.log("warning"); 

   var email = document.getElementById("email").value ;
   var pw = document.getElementById("pw").value ;
   var pw1 = document.getElementById("pw1").value ;

   var obj ={
    email:email,
    pw:pw,
   };
   var json = JSON.stringify(obj);
   localStorage.setItem(obj,json);
   console.log("user added");
}