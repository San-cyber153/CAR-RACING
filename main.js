canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car1_width = 20;
car1_height = 20;
background_image = "racing.jpg";
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car2_width = 20;
car2_height = 20;
car2_image = "car2.png";
car2_x = 10;
car2_y = 10;

function add()
{
 background_imgTag = new Image();
 background_imgTag.onload = uploadBackground;
 background_imgTag.src = background_image   
 car1_imgTag = new Image();
 car1_imgTag.onload = uploadcar1 ;
 car1_imgTag.src = car1_image;

 car2_imgTag = new Image();
 car2_imgTag.onload = uploadcar2() ;
 car2_imgTag.src = car2_image;
}

function uploadBackground()
{
    ctx.drawImage(background_imgTag, 0 , 0 , canvas.width , canvas.height );
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag, car1_x , car1_y , canvas.width , canvas.height );
}

function uploadcar2()
{
    ctx.drawImage(car2_imgTag, car2_x , car2_y , canvas.width , canvas.height );
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
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '87')
    {
        w();
        console.log("w");
    }
    if(keyPressed == '65')
    {
        a();
        console.log("a");
    }
    if(keyPressed == '83')
    {
        s();
        console.log("s");
    }
    if(keyPressed == '68')
    {
        d();
        console.log("d");
    }
}