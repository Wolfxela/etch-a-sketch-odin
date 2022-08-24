//make a var for all color buttons
const blackButton = document.querySelector(".blackColor");
const redButton = document.querySelector(".redColor");
const yellowButton = document.querySelector(".yellowColor");
const greenButton = document.querySelector(".greenColor");
const whiteButton = document.querySelector(".whiteColor");
//make a var for all size buttons
const x1Button = document.querySelector(".size1xButton");
const x2Button = document.querySelector(".size2xButton");
const x3Button = document.querySelector(".size3xButton");
//make a var for the clear button
const clearButton = document.querySelector(".clearButton")
//make a var that stores the color that the player draws with(by default it will be black)
let paintColor = "black";
//make a var that stores the drawingbox
const drawingbox = document.querySelector(".drawingDivContainer")

//make a var that stores if the player is clicking or not
let isPlayerNotClicking = true;





//when a color button is pressed change the color to that of the button's name
//do that by adding a eventcaller for all the colorbuttons 
//upon being pressed it will change the background color style of the hovered/clicked divs to the one of the button's name
blackButton.addEventListener('click', function(){ paintColor = "Black"; }); //paintColor = "black";
redButton.addEventListener('click', function(){ paintColor = "Red"; });
yellowButton.addEventListener('click', function(){ paintColor = "Yellow"; });
greenButton.addEventListener('click', function(){ paintColor = "Green"; });
whiteButton.addEventListener('click', function(){ paintColor = "White"; });

//check if the user clicks and holds on drawing box
drawingbox.addEventListener('mousedown', function(){isPlayerNotClicking = false;});
drawingbox.addEventListener('mouseup', function(){isPlayerNotClicking = true;});

//check if the user leaves and enters the drawingbox
drawingbox.addEventListener('mouseleave', function(){isPlayerNotClicking = true;});



//when a size change button is pressed, it will first clear the drawing box
x1Button.addEventListener('click', function(){ makeDrawingBoxDivs(8,5)});
x2Button.addEventListener('click', function(){makeDrawingBoxDivs(16,10)});
x3Button.addEventListener('click', function(){makeDrawingBoxDivs(32,20)});


//then depending on what size button was changed, a new set of divs will be placed in the drawing box if they press the 2x size button, then there will be twice as many divs
function makeDrawingBoxDivs(numOfHorizontalDivs,numOfVerticalDivs)
{
    let width = (((800/numOfHorizontalDivs) - 2).toString()).concat('px');
    let height = (((500/numOfVerticalDivs) -2).toString()).concat('px');

    //delete all the divs before increasing size
    deleteChild()
    
    
    for(let i = numOfVerticalDivs; i > 0; i--)
    {
        for(let i = numOfHorizontalDivs;i > 0;i--)
        {
        //the divs will be given a width and height depending on the drawing box's width and height - border/padding(x 2 because both top and bottom count) by default the border will be 1px
         const newDiv = document.createElement("div");
         newDiv.classList.add("drawingBoxDiv");
         newDiv.style.width = width;
         newDiv.style.height = height;

         //then we add events for mousedown to change the background color of the selected divs
         newDiv.addEventListener('mouseenter', function(){ if(isPlayerNotClicking != true){newDiv.style.backgroundColor = paintColor;} });
         newDiv.addEventListener('mousedown', function(){newDiv.style.backgroundColor = paintColor;})
         //make sure the divs can't be dragged
         newDiv.addEventListener('dragstart', (e) => {e.preventDefault()});
         //we add the new made div to the drawingbox
         drawingbox.appendChild(newDiv);
         
        }
    }
    
    
}
//make a function to delete all children of the drawingbox
function deleteChild() 
{
    var child = drawingbox.lastElementChild; 
    while (child) 
    {
        drawingbox.removeChild(child);
        child = drawingbox.lastElementChild;
    }
}
//when the clear button is called the drawing box will be cleared of color
clearButton.addEventListener('click', deleteChild);

