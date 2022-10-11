const container = document.querySelector('#container');
container.style.backgroundColor = '#5F7161';

const container1 = document.querySelector('#header-container');
container1.style.backgroundColor = '#3EC70B';

const urgente = document.querySelectorAll('.emergency-tasks');
urgente[0].style.backgroundColor = '#A97155';

const urgenteText = document.getElementsByTagName('h3');
urgenteText[0].style.backgroundColor = '#D18CE0';
urgenteText[1].style.backgroundColor = '#D18CE0';

const naoUrgente = document.querySelectorAll('.no-emergency-tasks');
naoUrgente[0].style.backgroundColor = '#D4D925';

const naoUrgenteText = document.getElementsByTagName('h3');
naoUrgenteText[2].style.backgroundColor = '#000000';
naoUrgenteText[3].style.backgroundColor = '#000000';


// ok