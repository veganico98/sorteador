import {arrayPerson, personList, contLi, collectionLi} from "./changePerson.js";

const arrayBtn = [];

export let chosedPerson = 0;
export default function initChangeNumber() {
  const qtd = document.querySelector('[data-choice="option"]');
  const createdButton = document.querySelector('[data-newModal="list"]');
  const checkDbl = document.querySelector('[data-checkDbl="checkbox"]');
  const warningAdapt = document.querySelector('[data-warningAdapt="span"]');
  
  qtd.addEventListener("change", changeNum);

  function changeNum() {
    let num = Number(qtd.value);
    qtd.disabled = true;
    checkDbl.disabled = true;
    createButton(num, checkDbl);
  }

  function createButton(qtd, check) {
    if(!check.checked && arrayPerson.length < qtd){
      qtd = arrayPerson.length;
      warningAdapt.classList.remove('hidden')
    }
    for(let i = 0; i < qtd; i++){
      const button = document.createElement("button");
      button.textContent = `Sorteio ${i + 1}`;
      button.addEventListener('click', () => {
        randomName(button);
        if(!check.checked){
          contLi(collectionLi);
        }
      });
      button.classList.add("bg-violet-800", "text-white", "font-bold", "p-2", "mb-2", "rounded-2xl", "cursor-pointer", "hover:bg-violet-900/80", "duration-300", "border-1", "border-amber-400/20", "disabled:bg-violet-950", "shadow-[0_15px_30px_rgba(0,0,0,0.4)]");
      button.classList.add(`btn${i+1}`);

      arrayBtn.push(button);
      createdButton.appendChild(button);
    }
    return arrayBtn
  }

  function randomName(btn){
    const numRand = Math.floor(Math.random() * arrayPerson.length);
    chosedPerson = arrayPerson[numRand];
    if(!checkDbl.checked){
      chosedPerson = arrayPerson.splice(numRand, 1)[0];
    }
    btn.textContent = chosedPerson;
    btn.disabled = true;
    return chosedPerson;
  };
}