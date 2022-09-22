const adviceAPI = "https://api.adviceslip.com/advice/";

async function generateAdvice(){
    const randomId = Math.floor(Math.random() * 200) + 1;
    
    const response = await fetch(`${adviceAPI}${randomId}`);
    const data = await response.json()
    const advice = data.slip;

    console.log(advice);
    return advice;
}

const theAdvice = document.getElementById("the-advice");
const adviceNum = document.getElementById("advice-number");

(async function(){
    let adviceData = await generateAdvice();

    while(adviceData.advice.length > 95) {
        adviceData = await generateAdvice();
    }
    console.log(adviceData.advice.length);
    theAdvice.textContent = `"${adviceData.advice}"`;
    adviceNum.textContent = `Advice #${adviceData.id}`;
})();

