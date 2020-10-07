//Global variables
//current element selected by the red 2 element selector:
let currentElement = 2;
//Alphabetical or numerical list type:
let listType = "";
//Best case, worst case, average case:
let scenario = "";
//Best case card value when generating the cards
let bestCaseCardValue = 1;
//Worst case card value when generating the cards
let worstCaseCardValue = 15;
//ID for the stopwatch
let intervalID;
//Number of seconds for the stopwatch
let numSeconds = 1;
//Number of seconds for the countdown
let numSecondsLeft = 60;
//which algorithm level the user will be playing:
let algorithm = "bubble-sort"

//resets all values
const restartLevel = () => {
  currentElement = 2;
  listType = "";
  scenario = "";
  bestCaseCardValue = 1;
  worstCaseCardValue = 15;
  numSeconds = 1;
  numSecondsLeft = 60;

  $('#timer').text("");
  clearInterval(intervalID);
}

//check if the player sorted the list correctly from smallest to largest
const answerChecker = () => {
  for (let i = 2; i < 16; i++) {
    let currentElementID = '#' + i.toString()
    let prevElementID = '#' + (i - 1).toString()
    let currentValue = "";
    let prevValue = "";
    if (listType === "alphabetical") {
        currentValue = ($(currentElementID).text()).charAt(0)
        prevValue = ($(prevElementID).text()).charAt(0)
    }
    else {
      currentValue = parseInt($(currentElementID).text())
      prevValue = parseInt($(prevElementID).text())
    }

    if (currentValue < prevValue) {
      return false;
    }
  }

  return true;
}

const finishedLevelMessage = ($modal) => {
  currentElement = 2;
  let finishedMessage = "You sorted the list correctly. You have completed the level!"
  if (!answerChecker()) {
    finishedMessage = "You didn't sort the list correctly. You didn't complete the level."
  }
  alert(finishedMessage)
  $modal.show()
}

const selectorWrapAround = () => {
  currentElement = 2;
  $("#selector-14").css('border-color', 'beige')
  $("#selector-15").css('border-color', 'beige')

  //turn on border for 1st element, turn off right border
  $('#selector-1').css('border-color', 'red')
  $('#selector-1').css('border-right', '0px')
  //turn on right border for 2nd element, turn off left border
  $('#selector-2').css('border-right', '3px')
  $('#selector-2').css('border-right-style', 'solid')
  $('#selector-2').css('border-color', 'red')
  $('#selector-2').css('border-left', '0px')
}

//Move red selector to the next two elements by turning on/off the borders
const moveSelector = () => {
  //wrap around and start at the beginning again
  if (currentElement === 15) {
    selectorWrapAround();
  }
  else {
    //turn off border for previous element
    let lastElementID = '#selector-' + (currentElement - 1).toString()
    $(lastElementID).css('border-color', 'beige')

    let firstElementID = '#selector-' + currentElement.toString()
    let secondElementID = '#selector-' + (currentElement + 1).toString()
    //turn on border, including left border, for 1st element
    $(firstElementID).css('border-left', '3px')
    $(firstElementID).css('border-left-style', 'solid')
    $(firstElementID).css('border-color', 'red')
    //turn off right border
    $(firstElementID).css('border-right', '0px')
    //turn on border, including right border, for 2nd element
    $(secondElementID).css('border-right', '3px')
    $(secondElementID).css('border-right-style', 'solid')
    //turn off left border
    $(secondElementID).css('border-color', 'red')
    $(secondElementID).css('border-left', '0px')
    currentElement++;
  }
}

const swapElements = () => {
  let currentElementID = '#' + currentElement.toString()
  let currentValue = $(currentElementID).text()
  //console.log(currentValue);
  let currentColor = $(currentElementID).css('background-color')

  let prevElementID = '#' + (currentElement - 1).toString()
  let prevValue = $(prevElementID).text()
  //console.log(prevValue);
  let prevColor = $(prevElementID).css('background-color')

  $(currentElementID).text(prevValue)
  $(currentElementID).css('background-color', prevColor)
  $(prevElementID).text(currentValue)
  $(prevElementID).css('background-color', currentColor)
}

//select the first two cards in the card list
const startSelection = () => {
  //turn on border for 1st element, turn off right border
  $('#selector-1').css('border-color', 'red')
  $('#selector-1').css('border-right', '0px')
  //turn on border for 2nd element, turn off left border
  $('#selector-2').css('border-color', 'red')
  $('#selector-2').css('border-left', '0px')
}

const generateBestCase = () => {
  let bestOutput = "";

  //the best case for bubble sort is that everything is already sorted
  if (listType === 'numerical') {
    bestOutput = bestCaseCardValue;
  }
  else {
    //Uppercase alphabetical letter starting from A
    bestOutput = String.fromCharCode(bestCaseCardValue + 64);
  }
  bestCaseCardValue++;

  return bestOutput;
}

const generateWorstCase = () => {
  let worstOutput = "";

  //worst case for bubble sort is that it's backwards
  if (listType === 'numerical') {
    worstOutput = worstCaseCardValue;
  }
  else {
    //Uppercase alphabetical letter
    worstOutput = String.fromCharCode(worstCaseCardValue + 64);
  }
  worstCaseCardValue--;

  return worstOutput;
}

const generateAverageCase = () => {
  let randomOutput = "";
  if (listType === 'numerical') {
    randomOutput = Math.floor((Math.random() * 15) + 1);
  }
  else {
    //random uppercase Unicode alphabetical letter
    randomOutput = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
  }

  return randomOutput;
}

const generateRandomCard = () => {
  let randomOutput = "";

  if (scenario === "best-case") {
    randomOutput = generateBestCase();
  }
  else if (scenario === "worst-case")
  {
    randomOutput = generateWorstCase();
  }
  else {
    //average case (random)
    randomOutput = generateAverageCase();
  }

  return randomOutput;
}

const randomColorGenerator = () => {
  const red =  Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const color = `rgb(${red},${green}, ${blue})`;

  return color;
}

const makeList = () => {
  const $cardList = $('#card-list')
  $cardList.empty();

  for(let i = 1; i < 16; i++){
    //append a div with the two cards selected class to the card list
    let $twoCardsSelected = $('<div>');
    $twoCardsSelected.addClass('two-cards-selected');
    let selectorID = 'selector-'+ i.toString();
    $twoCardsSelected.attr('id', selectorID);
    $('#card-list').append($twoCardsSelected);

    //Append square div with random output/color to two cards selected div
    const $square = $('<div>');
    $square.addClass('square');
    $square.attr('id', i);
    $square.text(generateRandomCard());
    $twoCardsSelected.append($square);
    $square.css('background-color', randomColorGenerator());
  }
}

const displayStopwatchTime = () => {
  $('#timer').text(numSeconds + " secs.")
  numSeconds++;
}

const startStopwatch = () => {
  $('#timer').text("0 secs.")
  intervalID = setInterval(displayStopwatchTime, 1000);
}

const displayCountdownTime = () => {
  $('#timer').text(numSecondsLeft + " secs.")
  numSecondsLeft--;
}

const timesUp = () => {
    alert("Times up!")
    const $modal = $('#modal');
    finishedLevelMessage($modal)
    restartLevel();
}

const startCountdown = () => {
    $('#timer').text("60 secs.")
    intervalID = setInterval(displayCountdownTime, 1000);
    setTimeout(timesUp, 62000);
}

//get user input from radio buttons
const getUserRadioInput = () => {
  let gameMode = $("input[name='game-mode']:checked").val();
  if (gameMode === 'stopwatch') {
    startStopwatch();
  }
  else if (gameMode === 'countdown') {
    startCountdown();
  }
  console.log(gameMode)

  scenario = $("input[name='scenario']:checked").val();
  console.log(scenario)

  // let displayDirection = $("input[name='display-direction']:checked").val();
  // console.log(displayDirection)
  listType = $("input[name='list-type']:checked").val();
  console.log(listType)
}

const startGame = ($modal) => {
  //Hide the instructions
  $modal.hide();

  getUserRadioInput();

  //display all the cards
  makeList()

  //select the first two cards
  startSelection();
}

$(() => {
  // algorithm = $("input[name='algorithm-level']:checked").val();
  // let algorithmID = '#' + algorithm;
  $('#bubble-sort').on('click', () => {
    algorithm = $("input[name='algorithm-level']:checked").val();
    console.log(algorithm)
    $('#quicksort-instructions').hide()
    $('#bubblesort-instructions').show()
  });

  $('#quicksort').on('click', () => {
    algorithm = $("input[name='algorithm-level']:checked").val();
    console.log(algorithm)
    $('#bubblesort-instructions').hide()
    $('#quicksort-instructions').show()
  });

  const $modal = $('#modal');
  $('#startBtn').on('click', () => {
    startGame($modal)
  });

  $('#swapBtn').on('click', () => {
    swapElements();
    moveSelector()
  });
  $('#passBtn').on('click', () => {
    moveSelector()
  });

  $('#doneBtn').on('click', () => {
    finishedLevelMessage($modal)
    restartLevel();
  });
});
