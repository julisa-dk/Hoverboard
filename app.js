const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
//const colors = ['#e74c3c', '#8e44ad', '3498db', '#e67e22', '#2ecc71']
const colors = ['#17e04a', '#e017bb', '#17d9e0', '#e01721', '#e0cc17', '3517e0']

// create the class square (virtual)
for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    //add listner for each square of the board
    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave', removeColor)

    // add class square into html (class board)
    board.append(square)

    
  }

  // create function setColor (element='square')
  function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    //element.style.backgroundColor = 'red'
    element.style.backgroundColor = color
    // volume effect of colors for the squares
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
  }

  // create function removeColor
  function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#1d1d1d'
    // delete borders of squares
    element.style.boxShadow = `0 0 2px #000`
  }

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
  }