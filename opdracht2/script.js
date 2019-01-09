
$("#clickme").click(function() {


let salaris = $("#salaris").val();
console.log(salaris);
let geslacht = $( "#myselect option:checked" ).val();
console.log(geslacht);
let aantalkind = $("#amountkids").val();
console.log(aantalkind);

let uitgaven = percentage(salaris,18);
let verzekering = percentage(salaris,7);
let bijdragen = percentage(salaris,5);
let korting = 0;
let kosten = uitgaven + verzekering + bijdragen;


if (geslacht == "Vrouw"){
  korting =  korting + percentage(kosten,2);
}

switch(parseInt(aantalkind)) {
  case 3:
    korting = korting + percentage(kosten,1);
    break;
  case 4:
    korting = korting + percentage(kosten,2);
    break;
}
let resultaat = (salaris - (kosten-korting));
alert(resultaat);
});


function percentage(num, per){
  return (num/100)*per;
}