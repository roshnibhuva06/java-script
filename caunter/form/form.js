const name=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
const conform_password=document.getElementById("conform_password");
const sing_up_button = document.getElementById("btn")

let error = document.getElementById("error");

sing_up_button.addEventListener("click" , () =>{
    form_validate();
});

function form_validate(){
    if(name.value == "" || email.value == "" || password.value == "" || conform_password.value =="")
{
    error.innerHTML =" not fied must be filled";
}
else
{
    error.innerHTML = "succsefully rugisted!";
}
   
}