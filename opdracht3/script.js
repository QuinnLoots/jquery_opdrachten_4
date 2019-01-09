let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
let letterNumber = /^[A-Za-z-]+$/;

$("#clickme").click(function() {
let emailinput = $("#email").val();

if (testEmail.test(emailinput)){
alert("email passed");
}else{
alert("email failed");
}
let telnummer = $("#tel").val();

if(telnummer.match(/^\d+$/)) {
   alert("phonenumber passed");
}else{
    alert("phonenumber failed");
}

let naam = $("#naam").val();
let voornaam = $("#voornaam").val();

 if(naam.match(letterNumber)&&voornaam.match(letterNumber)){
   alert("name passed");
  }
else{ 
  alert("name failed");
}
});

