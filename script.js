// functions
function draw_squares(eachSide=5) {
    var container = document.querySelector('.container');
    //  container.innerHTML = '';//don't want any extra boxes when you call this function again
    
    for(let i = 0; i < eachSide * eachSide; i++){
        var box = document.createElement('div');//create a div
        //box.className = 'box';//assign class
        box.classList.add("box");
        define_style(box, 'blue');
        container.appendChild(box);//append
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



function loadWindow(){
    window.addEventListener('load', function() {
        draw_squares();
        outBoxes = document.querySelectorAll('.box');
        // change colour to white when you hover over 
        hoverOver(outBoxes);

    });
}

function clear(outBoxes){
    const btn = document.querySelector("#clear");
    btn.addEventListener('click', function() {draw_squares();});
}

// main script
let outBoxes;
clear();
loadWindow();



