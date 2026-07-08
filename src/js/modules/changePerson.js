    import { chosedPerson } from "./changeNum.js";
    
    export const arrayPerson = [];
    export let collectionLi = [];
    export const personList = document.querySelector('[data-personList="list"]')
    export default function initChangePerson() {
    
    const person = document.querySelector('[data-person="input"]');
    const buttonSendperson = document.querySelector('[data-person="button"]');
    buttonSendperson.addEventListener("click", addName)

    const warningDbl = document.querySelector('[data-warningDbl="span"]');
    const warningNth = document.querySelector('[data-warningNth="span"]')

    function addName(){
        const personValue = person.value.trim().toLowerCase();
        if(validName(personValue) || validDouble(personValue)){
            if(validName(personValue)){
                warnings(warningNth,warningDbl)
            }
            if(validDouble(personValue)){
                warnings(warningDbl,warningNth)
            }
            return person.value = ''
        }else{
            arrayPerson.push(personValue)
            personList.classList.remove('hidden')
            clearWarnings(warningNth, warningDbl)
            addNameOnList(personValue);
            person.value = '';
        }
    };

    let numLi = 1;
    function addNameOnList(personValue){
        const list = document.createElement("li");
        list.textContent = personValue;
        personList.appendChild(list); 
        numLi += 1;
        collectionLi = [...personList.children].map(list => list)
        return collectionLi
    };

    function validName(name){
        const valid = name ? false : true;
        return valid;
    }

    function validDouble(name){
        const valid = arrayPerson.includes(name) ? true : false;
        return valid;
    }

    function warnings(wngA, wngB){
        wngA.classList.remove('hidden');
        if(!wngB.classList.contains('hidden')){
            wngB.classList.add('hidden');
        }
    }
    
    function clearWarnings(wngA, wngB){
        if(!wngA.classList.contains('hidden')){
            wngA.classList.add('hidden');
        }
        if(!wngB.classList.contains('hidden')){
            wngB.classList.add('hidden');
        }
    }
}

export function contLi(collection){
    const arrayListLi = Array.from(collection)
    for(let i = 0; i <= arrayListLi.length-1; i++){
        const indexArray = arrayListLi[i].textContent
        if(chosedPerson === indexArray){
            arrayListLi[i].classList.add("text-amber-400/90")
        }
    }
}