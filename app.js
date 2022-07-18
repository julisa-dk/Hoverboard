const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['red', 'blue', 'green', 'yellow', 'purple']

// create the class square (virtual)
for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    //add listner for each square of the board
    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    // add class square into html (class board)
    board.append(square)

    
  }

  // create function setColor (element='square')
  function setColor(element) {
    const color = getRandomColor()
    //element.style.backgroundColor = 'red'
    element.style.backgroundColor = color
  }

  // create function removeColor
  function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
  }

  function getRandomColor() {
    const index= Math.floor(Math.random() * colors.length)
    return colors[index]
  }