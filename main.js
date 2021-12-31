
canvas=document.getElementById("a");
//Give specific height and width to the car image
ctx=canvas.getContext("2d")
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
greencar_width=75;
greencar_height=100;
//Set initial position for a car image.
greencar_x=5;
greencar_y=225;
function add() {
	background_imgTag = new Image(); //defining a variable with a new image
    background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
    background_imgTag.src = background_image;   // load image

    rover_imgTag = new Image(); //defining a variable with a new image
    rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
    rover_imgTag.src = greencar_image;   // load image//upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);//Define function ‘uploadBackground’

}

function uploadrover() {
	ctx.drawImage(rover_imgTag, greencar_x, greencar_y, greencar_width, greencar_height)//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
    if(greencar_y >=0)
    {
        greencar_y = greencar_y - 10;
         uploadBackground();
         uploadrover(); 
    }
}
function down()
{
    if(greencar_y <=500)
    {
        greencar_y =greencar_y+ 10;
        uploadBackground();
         uploadrover();
    }
}
function left()
{
    if(greencar_x >= 0)
    {
        greencar_x =greencar_x - 10;
       
        uploadBackground();
         uploadrover();
    }
}
function right()
{
    if(greencar_x <= 700)
    {
        greencar_x =greencar_x + 10;
        uploadBackground();
        uploadrover();
   }
}