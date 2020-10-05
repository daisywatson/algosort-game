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

const makeList = (listType) => {
  const $cardList = $('#card-list')
  $cardList.empty();
  for(let i = 1; i < 15; i++){
    const $square = $('<div>');
    $square.addClass('square');
    $square.text(generateRandomCard(listType));
    $cardList.append($square);
    const red =  Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const color = `rgb(${red},${green}, ${blue})`;
    $square.css('background-color', color);
  }
}

const startGame = ($modal) => {
  //Hide the instructions
  $modal.hide();

  let gameMode = $("input[name='game-mode']:checked").val();
  console.log(gameMode)
  let displayDirection = $("input[name='display-direction']:checked").val();
  console.log(displayDirection)
  let listType = $("input[name='list-type']:checked").val();
  console.log(listType)
  makeList(listType)
  let scenario = $("input[name='scenario']:checked").val();
  console.log(scenario)
}


$(() => {
  const $modal = $('#modal');
  $('#startBtn').on('click', () => {
    startGame($modal)
  });
});
