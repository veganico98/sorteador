import { addPerson, getPeople, removePerson } from "./people.js";
import { getDoubleCheckbox, lockTag } from "./ui.js";

    export default function initDraw() {
        
    }

    export function drawRandom(){
        let players = getPeople();
        const numRand = Math.floor(Math.random() * players.length);
        let chosedPlayer = players[numRand];

        if(!getDoubleCheckbox().checked){
            let chosedPlayer = removePerson(numRand)
        }
        return chosedPlayer
    }

    export function draw(button){
        button.textContent = drawRandom();
        lockTag(button);
    }

    export function removeChosenPerson() {

    }

