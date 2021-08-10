
const forEachLetter = document.querySelectorAll("#letters path");

for(let letter = 0; letter < forEachLetter.length; letter++){

    console.log(`letter ${letter} is ${forEachLetter[letter].getTotalLength()}`);

    
    setAnimationProps(letter);

    let letterAnimationDelay = forEachLetter[letter].style.animationDelay;

    if(!letterAnimationDelay){

        let letterWaveFrequency = (letter)/4; 
        let randomLetterWaveFrequency = Math.floor(Math.random(letterWaveFrequency) * 8);

        runLetterAnimationDelay(letter, letterWaveFrequency, randomLetterWaveFrequency);
        
    }

}
  
function runLetterAnimationDelay(letter, frequency, random) {

    forEachLetter[letter].style.transition="transform";

    //chained
    forEachLetter[letter].style.animationDelay=`${frequency}s`;
    
    //random
    forEachLetter[letter].style.animationDelay=`${random}s`;
}

function setAnimationProps(letter) {

    forEachLetter[letter].style.animationName = "hideText";
    forEachLetter[letter].style.animationDuration = "4s"; //snake style for shorter times and NO random;
    forEachLetter[letter].style.animationIterationCount = "infinite";
    forEachLetter[letter].style.animationDirection = "alternate";

}
    
