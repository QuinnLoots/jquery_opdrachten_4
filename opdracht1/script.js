
let choices = ["Rock","Paper","Scissors"]
$("#speel").click(function() {
let computerChoice = Math.floor(Math.random()*(3));
let myChoice = $( "#myselect option:checked" ).val();
let hisChoice = choices[computerChoice];

if (myChoice==hisChoice){
    alert(myChoice + " - "+hisChoice + ". It's a tie!");
}else if(hisChoice=="Rock"){
    if(myChoice=="Paper"){
        alert(myChoice + " - "+hisChoice + ". you Win!");
    }else if (myChoice=="Scissors"){
        alert(myChoice + " - "+hisChoice + ". you lose!");
    }
}else if(hisChoice=="Paper"){
    if(myChoice=="Scissors"){
        alert(myChoice + " - "+hisChoice + ". you Win!");
    }else if (myChoice=="Rock"){
        alert(myChoice + " - "+hisChoice + ". you lose!");
    }
}else if(hisChoice=="Scissors"){
    if(myChoice=="Rock"){
        alert(myChoice + " - "+hisChoice + ". you Win!");
    }else if (myChoice=="Paper"){
        alert(myChoice + " - "+hisChoice + ". you lose!");
    }
}

});