// functions
function draw_squares(eachSide=5) {
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

function define_style(box, colour){
    let boxLength = 50;    
    box.style.width = Math.floor(boxLength);
    box.style.height = Math.floor(boxLength)
    box.style.backgroundColor = colour;
    box.style.padding = 4;
    box.style.border= '4px solid #fff';//border for margin but use border-box to make sure the width and height are still 50px
    //box.style.float = 'right';
    box.style.display = 'inline-block';

}

function hoverOver(boxes){
    boxes.forEach(function (box){
        box.addEventListener('mouseenter', function() {
            define_style(box, 'white');
        });
    });
}

function clear_squares(outBoxes, eachSide=5) {
    const boxes = document.querySelectorAll('.box');
    //  container.innerHTML = '';//don't want any extra boxes when you call this function again
    console.log(boxes);
    
    boxes.forEach(function (box) {define_style(box, 'blue')});
    
  }


function loadWindow(){
    window.addEventListener('load', function() {
        draw_squares();
        outBoxes = document.querySelectorAll('.box');
        // change colour to white when you hover over 
        hoverOver(outBoxes);
        clear(outBoxes);
    });
}

function clear(outBoxes){
    const btn = document.querySelector("#clear");
    btn.addEventListener('click', function() {clear_squares();});
}

// main script
let outBoxes;
loadWindow();



