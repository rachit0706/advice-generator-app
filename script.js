const adviceAPI = "https://api.adviceslip.com/advice";

async function generateAdvice() {
    try {
        const response = await fetch(adviceAPI);
        const data = await response.json();
        console.log(response);
        const advice = data.slip;

        console.log(advice);
        return advice;
    } catch (e) {
        alert("Some error occured while loading data :(");
    }

}

const theAdvice = document.querySelector("#the-advice > h1");
const adviceNum = document.getElementById("advice-number");
const diceButton = document.getElementById("dice-img");


diceButton.addEventListener('click', async function () {
    const adviceData = await generateAdvice();
    const { id, advice } = adviceData;

    // console.log(adviceData);
    theAdvice.textContent = `"${advice}"`;
    adviceNum.textContent = `Advice #${id}`;
});

