let startTime 
let endTime;

const timeButton = document.getElementById('timeButton');
const elapsedTimeH1 = document.getElementById('elapsedTime');

const list = document.getElementById('previousTimesList');

function startCount() {
    startTime = new Date();
    changeButtonOnStart();
}
function endCount() {
    endTime = new Date();
    let timeDiff = endTime - startTime; //in ms
    // strip the ms
    timeDiff /= 1000;

    // get seconds 
    let seconds = Math.round(timeDiff);
    elapsedTimeH1.innerHTML = seconds + ' seconds.';

    changeButtonOnStop();
    createListItem(startTime, endTime, seconds);
}

function changeButtonOnStart() {
    timeButton.style.backgroundColor = "red";
    timeButton.style.Color = "black";
    timeButton.innerHTML = "STOP";
    timeButton.setAttribute('onclick', 'endCount()');
}


function changeButtonOnStop() {
  timeButton.style.backgroundColor = "green";
  timeButton.style.Color = "white";
  timeButton.innerHTML = "START";
  timeButton.setAttribute('onclick', 'startCount()');
}

function createListItem(startingDate, endingDate, timePassed){
    const listItem = document.createElement('li');
    listItem.className = 'listItem';
    listItem.innerHTML = 'Start geklikt om: ' + startingDate + '. <br><br> Stop geklikt om: ' + endingDate +'. <br><br>' + 'Verstreken tijd is: ' + timePassed + '.';
    list.prepend(listItem);

}