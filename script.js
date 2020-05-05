// functions
function draw_squares(eachSide) {
    var container = document.querySelector('.container');
    //  container.innerHTML = '';//don't want any extra boxes when you call this function again
    
    for(let i = 0; i < eachSide ; i++){
        for(let j = 0; j<eachSide; j++){
            var box = document.createElement('div');//create a div
            //box.className = 'box';//assign class
            box.classList.add("box");
            define_style(box, 'blue');
            container.appendChild(box);//append
        }
        // inserts the square next line
        var newLine = document.createElement('br');
        container.appendChild(newLine);
    } 
}

function define_style(box, colour, eachSide){
    let boxLength =  document.documentElement.clientHeight / eachSide - 4;

    box.style.width = Math.floor(boxLength);
    box.style.height = Math.floor(boxLength)

    box.style.backgroundColor = colour;
    box.style.padding = 4;
    box.style.border= '4px solid #fff';//border for margin but use border-box to make sure the width and height are still 50px
    //box.style.float = 'right';
    box.style.display = 'inline-block';

}

function hoverOver(boxes, eachSide){
    boxes.forEach(function (box){
        box.addEventListener('mouseenter', function() {
            define_style(box, 'white', eachSide);
        });
    });
}

function clear_squares(eachSide) {
    const boxes = document.querySelectorAll('.box');
    //  container.innerHTML = '';//don't want any extra boxes when you call this function again
    boxes.forEach(function (box) {define_style(box, 'blue', eachSide)});
    
  }

function clear_button(eachSide){
    const btn = document.querySelector("#clear");
    btn.addEventListener('click', function() {
        clear_squares(eachSide);
        let num = prompt("New grid dimension: ");

        // delete the boxes
        document.querySelectorAll(".box").forEach(e => e.parentNode.removeChild(e));
        draw_squares(num);
    });
    
}

function loadWindow(eachSide){
    window.addEventListener('load', function() {
        draw_squares(eachSide);
        outBoxes = document.querySelectorAll('.box');
        // change colour to white when you hover over 
        hoverOver(outBoxes, eachSide);
        clear_button(eachSide);
    });
}



// main script
let outBoxes;
const defaultSide = 5;
loadWindow(defaultSide);



