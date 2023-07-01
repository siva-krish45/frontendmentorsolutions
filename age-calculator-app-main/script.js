const date = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");
const datemsg = document.getElementById("datemsg");
const yearmsg = document.getElementById("yearmsg");
const monthmsg = document.getElementById("monthmsg");
const yearoutput = document.getElementById("yearoutput");
const monthoutput = document.getElementById("monthoutput");
const dayoutput = document.getElementById("dayoutput");
const today = new Date();

//numbers only displayed in the input field.
function inputonlynumbers(x){
    x.addEventListener("input",function(){
        x.value = x.value.replace(/[^0-9]/g, "");
    });
}

inputonlynumbers(date);
inputonlynumbers(month);
inputonlynumbers(year);


year.addEventListener("blur",validDay);
month.addEventListener("blur",validDay);
date.addEventListener("blur",validDay);

year.addEventListener("keyup",validateYear);
month.addEventListener("keyup",validateMonth);
date.addEventListener("keyup",validateDate);


function errorIndication(msg){
    msg.previousElementSibling.style.border= "1px solid hsl(0, 100%, 67%)";
    msg.previousElementSibling.previousElementSibling.style.color = "hsl(0,100%,67%)";
}

function removeErrorIndication(msg){
    msg.previousElementSibling.style.border="1px solid hsl(0, 1%, 44%)";
    msg.previousElementSibling.previousElementSibling.style.color ="hsl(0, 1%, 44%)";
}

function calculateAge(){
    let ageYears = today.getFullYear() - year.value;
    let ageMonths = (today.getMonth() + 1) - month.value;
    let ageDays = today.getDate() - date.value;

    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
        ageYears--;
        ageMonths += 12;
    }

    if (ageDays < 0) {
        const daysInLastMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDays += daysInLastMonth;
        ageMonths--;
    }

    yearoutput.innerHTML = ageYears;
    monthoutput.innerHTML = ageMonths;
    dayoutput.innerHTML = ageDays;

}

function validDay(){
    
    if(validateDate() == true && validateMonth() == true && validateYear() == true){
        if((year.value == today.getFullYear() && month.value > today.getMonth() + 1 )|| (year.value==today.getFullYear() && month.value == today.getMonth() + 1 && date.value > today.getDate()) ){
            datemsg.innerHTML = "must be in the past";
            errorIndication(datemsg);
        }
        else{
            const valid = new Date(year.value, month.value-1, date.value).getDate() == date.value;
            if(!valid){
                datemsg.innerHTML = "This date dont exist";
                errorIndication(datemsg);
            }
            else{
                removeErrorIndication(datemsg);
                calculateAge();
            }
        }
        
     }

    
}

function validateYear(){
    let yearvalid = false;
    if(year.value == ""){
        yearmsg.innerHTML = "this field is required";
        errorIndication(yearmsg);
    }
    else if(year.value >  today.getFullYear() || year.value < 1000){
        yearmsg.innerHTML = "get a valid year";
        errorIndication(yearmsg);
    }else{
        yearmsg.innerHTML = "";
        yearvalid = true;
        removeErrorIndication(yearmsg);
    }

    
    return yearvalid;
}

function validateMonth(){
    let monthvalid = false;
    if(month.value == ""){
        monthmsg.innerHTML = "this field is required";
        errorIndication(monthmsg);
    }
    else if(month.value < 1 || month.value > 12){
        monthmsg.innerHTML = "get a valid month";
        errorIndication(monthmsg);
        
    }else{
        monthmsg.innerHTML = "";
        monthvalid = true;
        removeErrorIndication(monthmsg);
    }
    
    return monthvalid;
}

function validateDate(){
    let datevalid = false;
    if(date.value == ""){
       datemsg.innerHTML = "this field is required";
       errorIndication(datemsg);
    }
    else if(date.value < 1 || date.value > 31){
        datemsg.innerHTML = "get a valid date";
        errorIndication(datemsg);
        
    }else{
        datemsg.innerHTML = "";
        datevalid = true;
        removeErrorIndication(datemsg);
    }
   
    return datevalid;
}


