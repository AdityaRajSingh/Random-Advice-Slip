

const advice=document.querySelector(".advice");


const getadvice =() =>
{
    axios.get("https://api.adviceslip.com/advice")
 .then(response => {
   console.log(response.data.slip.advice);
   advice.innerHTML=response.data.slip.advice;
 })
 .catch(error => console.error(error));
}

document.getElementById("btn-advice").addEventListener("click",getadvice);

getadvice();



