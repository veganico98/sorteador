import { draw, drawRandom } from "./draw.js";
import { getPeople } from "./people.js";
import { ulDraw, getAmount, buttonUi, lockTag, getDoubleCheckbox, showWarningAmount } from "./ui.js";

export default function initButton() {};

let arrayBtn = [];

export function createButtons(){
    let qtd = Number(getAmount().value)
    if(qtd > getPeople().length && !getDoubleCheckbox().checked){
        qtd = Number(getPeople().length)
        showWarningAmount();
    }else{
        qtd = Number(getAmount().value)
    }
    for(let i = 0; i <= qtd-1; i++){
        let button = document.createElement("button");
        buttonUi(button);
        button.textContent = `Sorteio ${i+1}`;
        button.addEventListener('click', () => draw(button));
        ulDraw().appendChild(button);
        arrayBtn.push(button);
    }
    lockTag(getAmount());
    lockTag(getDoubleCheckbox());
}