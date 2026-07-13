import { addPerson, getPeople, hasDuplicate } from "./people.js";
import { createButtons } from "./buttons.js";

export default function initUi() { 

}

const listPlayers = document.querySelector('[data-personList="list"]');
const inputPlayer = document.querySelector('[data-person="input"]');
const submitButton = document.querySelector('[data-person="button"]');
const warningEmpty = document.querySelector('[data-warningNth="span"]');
const warningDouble = document.querySelector('[data-warningDbl="span"]');
const numPlays = document.querySelector('[data-choice="option"]');
const doubleCheckbox = document.querySelector('[data-checkDbl="checkbox"]');
const ulDrawButtons = document.querySelector('[data-drawButtons="list"]');
const warningAmount = document.querySelector('[data-warningAdapt="span"]');


export function showWarningEmpty(name){
    if(!name){
        removeHidden(warningEmpty);
        addHidden(warningDouble);
        return true;
    }
}

export function showWarningDuplicate(name){
    if(hasDuplicate(name)){
        removeHidden(warningDouble);
        addHidden(warningEmpty);
        return true;
    }
}

export function clearInput(input){
    input.value = "";
}

export function removeHidden(tag){
    tag.classList.remove('hidden');
}

export function addHidden(tag){
    tag.classList.add('hidden');
}

export function containsHidden(tag){
    !tag.classList.contains('hidden');
}

export function hideWarning(){
    if(!warningDouble.classList.contains('hidden')){
        warningDouble.classList.add('hidden');
    }
    if(!warningEmpty.classList.contains('hidden')){
        warningEmpty.classList.add('hidden');
    }
}

export function renderPerson(name){
    removeHidden(listPlayers);
    const list = document.createElement("li");
    list.textContent = name;
    listPlayers.appendChild(list);
}

export function ulDraw(){
    return ulDrawButtons;
}

export function buttonUi(button){
    button.classList.add("bg-violet-800","text-white","font-bold","p-2","mb-2","rounded-2xl","cursor-pointer","hover:bg-violet-900/80","duration-300","border-1","border-amber-400/20","disabled:bg-violet-950","shadow-[0_15px_30px_rgba(0,0,0,0.4)]") 
    return button
}

function highlightPerson(){

}

function renderButtons(){

}

function renderChosenPerson(){
    
}

export function showWarningAmount(){
    warningAmount.classList.remove('hidden');
}

export function getAmount(){
    return numPlays;
}

export function lockTag(tag){
    tag.disabled = true;
    
}

export function getDoubleCheckbox() {
    return doubleCheckbox;
}


submitButton.addEventListener('click', () => {
    addPerson(inputPlayer);
})

numPlays.addEventListener('change', createButtons);