const inputRandnum = document.querySelector('.randnum__input');
const btnRandnum = document.querySelector('.randnum__btn');
const resultRundnum = document.querySelector('.randnum__result');




btnRandnum.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 10) + 1

    // if (+inputRandnum.value < 10) {
    //     resultRundnum.textContent = `введіть число від 1 до 10`
    //     // resultRundnum.style.color = '#FF0000';
    //     resultRundnum.style.opacity = '1'
    // } else if (+inputRandnum.value > 1) {
    //     resultRundnum.textContent = `введіть число від 1 до 10`
    //     // resultRundnum.style.color = '#FF0000';
    //     resultRundnum.style.opacity = '1'
    // } 

    // if (+inputRandnum.value === randomNumber) {
    //     resultRundnum.textContent = `Вітаю, ви вгадали число! ${randomNumber}`
    //     resultRundnum.style.color = '#039900';
    //     resultRundnum.style.opacity = '1'
    // } else if (+inputRandnum.value !== randomNumber){
    //     resultRundnum.textContent = `Ви не вгадали число! ${randomNumber}`
    //     resultRundnum.style.color = '#FF0000';
    //     resultRundnum.style.opacity = '1'
    // } else if (+inputRandnum.value < 10) {
    //     resultRundnum.textContent = `введіть число від 1 до 10`
    //     // resultRundnum.style.color = '#FF0000';
    //     resultRundnum.style.opacity = '1'
    // } else if (+inputRandnum.value > 1) {
    //     resultRundnum.textContent = `введіть число від 1 до 10`
    //     // resultRundnum.style.color = '#FF0000';
    //     resultRundnum.style.opacity = '1'
    // } else {
    //     resultRundnum.textContent = `Введіть число`
    //     resultRundnum.style.opacity = '1'

    // }

    if (+inputRandnum.value > 0 && +inputRandnum.value <= 10) {
        if (+inputRandnum.value !== randomNumber) {
            resultRundnum.textContent = `Ви не вгадали число! ${randomNumber}`
            resultRundnum.style.color = '#FF0000';
            resultRundnum.style.opacity = '1'
        
        }else if (+inputRandnum.value === randomNumber) {
            resultRundnum.textContent = `Вітаю, ви вгадали число! ${randomNumber}`
            resultRundnum.style.color = '#039900';
            resultRundnum.style.opacity = '1'
        }
    } else if (+inputRandnum.value <= 0 || +inputRandnum.value >= 10) {
            resultRundnum.textContent = `введіть число від 1 до 10`
            resultRundnum.style.color = '#000';
            resultRundnum.style.opacity = '1'
    } 
    // else if (+inputRandnum.value === randomNumber) {
    //         resultRundnum.textContent = `Вітаю, ви вгадали число! ${randomNumber}`
    //         resultRundnum.style.color = '#039900';
    //         resultRundnum.style.opacity = '1'
    // }
})