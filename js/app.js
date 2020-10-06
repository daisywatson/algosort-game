const generateRandomCard = (listType) => {
  let randomOutput = "";

  if (listType === 'numerical') {
    randomOutput = Math.floor((Math.random() * 15) + 1);
  }
  else {
    //random uppercase Unicode alphabetical letter
    randomOutput = String.fromCharCode(
      Math.floor((Math.random() * 25) + 65).toString());
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

const makeList = (listType) => {
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
    $square.text(generateRandomCard(listType));
    $twoCardsSelected.append($square);
    $square.css('background-color', randomColorGenerator());
  }
}

const startGame = ($modal) => {
  //Hide the instructions
  $modal.hide();

  let gameMode = $("input[name='game-mode']:checked").val();
  console.log(gameMode)

  let scenario = $("input[name='scenario']:checked").val();
  console.log(scenario)

  // let displayDirection = $("input[name='display-direction']:checked").val();
  // console.log(displayDirection)
  let listType = $("input[name='list-type']:checked").val();
  console.log(listType)
  makeList(listType)

  sortingLoop();
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
let currentElement = 2;
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


const sortingLoop = () => {
  console.log("sorting loop begins")

  //turn on border for 1st element, turn off right border
  $('#selector-1').css('border-color', 'red')
  $('#selector-1').css('border-right', '0px')
  //turn on border for 2nd element, turn off left border
  $('#selector-2').css('border-color', 'red')
  $('#selector-2').css('border-left', '0px')

  $('#swapBtn').on('click', () => {
    swapElements();
    moveSelector()
  });
  $('#passBtn').on('click', () => {
    moveSelector()
  });
}

const swapElements = () => {
  let currentElementID = '#' + currentElement.toString()
  let currentValue = $(currentElementID).text()
  let currentColor = $(currentElementID).css('background-color')
  console.log(currentColor)
  let prevElementID = '#' +(currentElement - 1).toString()
  let prevValue = $(prevElementID).text()
  let prevColor = $(prevElementID).css('background-color')
  console.log(prevValue)

  $(currentElementID).text(prevValue)
  $(currentElementID).css('background-color', prevColor)
  $(prevElementID).text(currentValue)
  $(prevElementID).css('background-color', currentColor)
}


$(() => {
  const $modal = $('#modal');
  $('#startBtn').on('click', () => {
    startGame($modal)
  });
});
