import { addPerson, getPeople, removePerson } from "./people.js";
import { getDoubleCheckbox, getListPlayers, highlightPerson, lockTag, removeListPlayers } from "./ui.js";

    export default function initDraw() {
        
    }

    export function drawRandom(button){
        const players = getPeople();
        let arrayListPlayers = getListPlayers();
        
        const numRand = Math.floor(Math.random() * players.length);
        let chosedPlayer = players[numRand];

        if(!getDoubleCheckbox().checked){
            const chosenPlayer = removePerson(numRand);
            highlightPerson(chosenPlayer);
            return chosenPlayer;
        }
        
        return chosedPlayer;
}

    export function draw(button){
        button.textContent = drawRandom(button);
        lockTag(button);
    }

    export function removeChosenPerson() {

    }

