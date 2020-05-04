// functions
function draw_one_square() {
    var container = document.getElementById('container');
    container.innerHTML = '';//don't want any extra boxes when you call this function again
    
    var box = document.createElement('div');//create a div
    box.className = 'box';//assign class
    define_style(box);

    container.appendChild(box);//append
  }

function define_style(box){
    box.style.width = 50;
    box.style.height = 50;
    box.style.backgroundColor = 'blue';

}
// main script
const mainContainer = document.querySelector('#container');

window.addEventListener('load', function() {
    draw_one_square();
});
  