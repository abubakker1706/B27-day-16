     let food=document.querySelectorAll('input[type="checkbox"]')
for(var i = 0; i < food.length; i++) {
                         food[i].checked = true;   
                     }





function onSubmit(){
           
let firstName=document.getElementById("firstname").value;
let lastName=document.getElementById("lastname").value;
let address=document.getElementById("address").value
let gender=document.getElementById("gender").value




let pincode=document.getElementById("pincode").value
let state=document.getElementById("state").value
let country=document.getElementById("country").value

let html=''
html = "<tr><td>"+firstName+"</td><td>"+lastName+"</td><td>"+address+"</td><td>"+pincode+"</td><td>"+gender+"</td><td>"+state+"</td><td>"+country+"</td></tr>"
document.getElementById("result").innerHTML+=html
firstName=document.getElementById("firstname").value=''
document.getElementById("lastname").value=''
document.getElementById("address").value=''
document.getElementById("gender").value=''
document.getElementById("state").value=''
document.getElementById("country").value=''


}
