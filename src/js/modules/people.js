import { showWarningEmpty, showWarningDuplicate, clearInput, hideWarning, renderPerson } from "./ui.js";

export default function initPeople() {

}

const people = [];

export function addPerson(name){
    const nameValue = name.value;
    if(!nameValue){
        showWarningEmpty(nameValue);
        return
    }
    if(hasDuplicate(nameValue)){
        showWarningDuplicate(nameValue);
        return
    }
    people.push(nameValue);
    renderPerson(nameValue);
    hideWarning();
    clearInput(name);
}

export function getPeople() {
    return people;
}

export function hasDuplicate(name){
    return people.includes(name);
}

export function removePerson(index) {
    return people.splice(index, 1)[0];
}

export function clearPeople(){
    people.length = 0;
}
