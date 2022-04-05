

var current = "1";
var marked = '0';
var score = 0;
var isMarked = false;

function next(id) {
  
  var clicked = document.getElementById(id);
  
  //clicking on the beaver
  if (id == current) {
    
  clicked.getElementsByClassName('beaver')[0].style.display = 'none';
  
  var nextId;
  do {
    nextId = Math.floor(Math.random() * 9) + 1;
    nextId = String(nextId);
  } while( current == nextId );
  
  console.log(nextId);
  
  var nextTile = document.getElementById(nextId).getElementsByClassName('beaver')[0];
  nextTile.style.display = 'block';
  current = nextId;
  
  //if won
  if (current == marked) {
    score++;
    alert("You won\nYour score is: "+score);
  }
  
  //if lost
  else {
    if (isMarked == true) {
    document.getElementById(marked).style.borderColor = 'black';
    isMarked = false;
    score++;
   }
  }
  }
  
  //guessing beaver's position
  else {
    isMarked = true;
    document.getElementById(marked).style.borderColor = 'black';
    document.getElementById(id).style.borderColor = 'red';
    marked = id;
  }
}