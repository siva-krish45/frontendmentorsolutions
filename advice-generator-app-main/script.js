const advice = document.getElementById("advice");
const adviceid = document.querySelector(".advice-no");
const btn  = document.querySelector(".refresh");


btn.addEventListener("click", getAdvice);

function getAdvice(){
    let response = fetch("https://api.adviceslip.com/advice");

    response
    .then(response => {
        return response.json();
    }).then(result =>{
        advice.innerHTML = result.slip.advice;
        adviceid.innerHTML = `ADVICE # ${result.slip.id}`;
    })
    .catch(() =>{
        alert("Error occurred in acquiring the advice from the internet, please try again after some time");
    })
}
