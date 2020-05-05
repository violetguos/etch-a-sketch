// functions
function draw_squares(eachSide) {
    var container = document.querySelector('.container');
    //  container.innerHTML = '';//don't want any extra boxes when you call this function again
    
    const boxSize = define_size(eachSide);
    for(let i = 0; i < eachSide ; i++){
        for(let j = 0; j<eachSide; j++){
            var box = document.createElement('div');//create a div
            //box.className = 'box';//assign class
            box.classList.add("box");
            define_style(box, 'blue', boxSize);
            container.appendChild(box);//append
        }
        // inserts the square next line
        var newLine = document.createElement('br');
        container.appendChild(newLine);
    } 
}

function define_size(eachSide){
    let windowSize = (document.documentElement.clientHeight > document.documentElement.clientWidth)?document.documentElement.clientWidth:document.documentElement.clientHeight; 
    let boxLength =  windowSize / eachSide - 4;
    return Math.floor(boxLength);
}

function define_style(box, colour, boxSize){
    
    box.style.width = boxSize;
    box.style.height = boxSize;
    console.log(boxSize)
    box.style.backgroundColor = colour;
    box.style.padding = 4;
    box.style.border= '4px solid #fff';//border for margin but use border-box to make sure the width and height are still 50px
    //box.style.float = 'right';
    box.style.display = 'inline-block';

}

function hoverOver(boxes){
    boxes.forEach(function (box){
        box.addEventListener('mouseenter', function() {
            box.style.backgroundColor = "white";

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
        document.querySelectorAll("br").forEach(e => e.parentNode.removeChild(e));
        document.querySelectorAll(".box").forEach(e => e.parentNode.removeChild(e));
        
        // draw new squares
        draw_squares(num);
        const outBoxes = document.querySelectorAll(".box");
        hoverOver(outBoxes);

    });
    
}

function loadWindow(eachSide){
    window.addEventListener('load', function() {
        draw_squares(eachSide);
        outBoxes = document.querySelectorAll('.box');
        // change colour to white when you hover over 
        hoverOver(outBoxes);
        // button and prompt
        clear_button(eachSide);

    });
}



// main script
let outBoxes;
const defaultSide = 5;
loadWindow(defaultSide);


