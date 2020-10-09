# algosort-game
A game for learning how sorting algorithms work. 
I made this game to review sorting algorithms and to help other people learn how sorting algorithms work in concept.

### Technologies Used
jQuery, jQuery UI, HTML, CSS. jQuery UI was used to make the list sortable via drag and drop.

### Approaches Taken
The algorithm levels were designed to mimic the idea of how the algorithms work in concept rather than how they are implemented in code. 

### Installation Instructions
This game is playable on a modern browser.

### Unsolved Problems 
Code needs to be organized into classes or other files. 

### Forthcoming features
- Listing best scores using the stopwatch
- Explanations of how to sort a list if the player can't figure out how to 
- Hoare Quicksort partitioning level
- Lomuto Quicksort partitioning level 
- More algorithm levels 

## User Stories

1. First, the user can click on the radio button to choose an algorithm level to play: bubble sort, quick sort, or free sort. Bubble sort is default.
2. Second, the user can click on a radio button to choose a game mode: practice (no time limit), stopwatch (counts how fast the user sorts in seconds), or time limit during which the user must complete sorting the list within 60 seconds. Practice mode is default. 
3. Third, the user can click on a radio button to choose an average, best, worse case scenario for how the cards are initially displayed. Average case is default.
5. Finally, the user can press the start game button to start the game.

### Bubble Sort
1. First, the user can press either the swap button or the pass button.
3. The swap button will swap the two elements highlighted by the red selector. The selector will then move to the next two elements. 
4. The pass button will move the selector to the next two elements without swapping the elements.
5. When the user is finished sorting, the user can press the done button.
6. An alert will appear that indicates whether the user completed the level or not. The user can press the ok button. The screen will automatically return to the title screen.
7. If the user chose countdown mode, an alert will appear when the time is up. The user can press the ok button. Another alert will appear indicating whether or not the user sorted the list correctly. The user can press ok again and return to the title screen. 

### Quicksort
1. First, the user can press the select pivot button.
2. Second, the user can click on a card to select it as the pivot. A red border will appear around the pivot and it will appear larger in the card list.
3. The user can then drag and drop cards around the pivot card.
4. The user can press the deselect pivot button to deselect the pivot card.
5. The user can then press the pivot button again and repeat steps 1 - 4. 
6. Finally, the user can press the done button when finished. 
7. An alert will appear that indicates whether the user completed the level or not. The user can press the ok button. The screen will automatically return to the title screen.
8. If the user chose countdown mode, an alert will appear when the time is up. The user can press the ok button. Another alert will appear indicating whether or not the user sorted the list correctly. The user can press ok again and return to the title screen. 

### Free Sort
1. The user can drag and drop the cards in a desired order.
2. The user can press done when finished.
3. An alert will appear indicating whether or not the user sorted the cards correctly. The user can press the ok button. The screen will automatically return to the title screen.
4. If the user chose countdown mode, an alert will appear when the time is up. The user can press the ok button. Another alert will appear indicating whether or not the user sorted the list correctly. The user can press ok again and return to the title screen. 

## Wireframes
[title-screen]: https://raw.githubusercontent.com/daisywatson/algosort-game/main/Wireframes/title-screen.jpg 
