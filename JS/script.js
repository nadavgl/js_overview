let count = 10;
const h1 =document.querySelector('h1')

function endGame(){
  alert('Game Over!');
}

const interval = setInterval (function(){
  count--;
  h1.textContent = 'Count: ' + count; 
  
  if (!count){
  clearInterval(interval);
  endGame();
  }

}, 1000);




// setTimeout(function() {
//   console.log('time is up')
// }, 3000);