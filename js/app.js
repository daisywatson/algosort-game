//console.log("linked");
const startGame = ($modal) => {
  //Hide the instructions
  $modal.hide();

  let gameMode = $("input[name='game-mode']:checked").val();
  console.log(gameMode)
  let displayDirection = $("input[name='display-direction']:checked").val();
  console.log(displayDirection)
  let listType = $("input[name='list-type']:checked").val();
  console.log(listType)
  let scenario = $("input[name='scenario']:checked").val();
  console.log(scenario)
}


$(() => {
  const $modal = $('#modal');
  $('#startBtn').on('click', () => {
    startGame($modal)
  });
});
