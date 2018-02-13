console.log('hello')
document.querySelector('#red')
document.querySelector('#orange')
document.querySelector('#yellow')
document.querySelector('#green')
document.querySelector('#blue')
document.querySelector('#purple')
document.querySelector('#pink')
document.querySelector('#black')
document.querySelector('#white')


document.querySelector('#set-color')
setColor.addEventListener("click", function(e){
  e.preventDefault();
square.style.background = input.value;
  input.value = "";
});
