var canvas=new fabric.Canvas("myCanvas");
var block_height=45;
var block_width=45;
var player_x=0;
var player_y=0;
var player_object="";
var block_object="";


function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_object=img;
        player_object.scaleToWidth(175);
        player_object.scaleToHeight(155);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}



function block_img(img){
    fabric.Image.fromURL(img, function(img){
        block_object=img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);
    });
}


window.addEventListener("keydown",myKeydown);

function myKeydown(e){
keypress=e.keyCode;
console.log(keypress);
if (keypress == '38'){
    up();

}

if (keypress == '40'){
    down();
    
}

if (keypress == '37'){
    left();
    
}

if (keypress == '39'){
    right();
    
}

if (keypress == '87'){
    block_img("wall.jpg");
    
}


if (keypress == '71'){
    block_img("ground.png");
    
}

if (keypress == '76'){
    block_img("light_green.png");
    
}

if (keypress == '84'){
    block_img("trunk.jpg");
    
}

if (keypress == '82'){
    block_img("roof.jpg");
    
}

if (keypress == '89'){
    block_img("yellow_wall.png");
    
}

if (keypress == '68'){
    block_img("dark_green.png");
    
}

if (keypress == '85'){
    block_img("unique.png");
    
}

if (keypress == '67'){
    block_img("cloud.jpg");
    
}

if (e.shiftKey==true&&keypress=='77'){
    block_height=block_height-10;
    block_width=block_width-10;
    document.getElementById("crrnt_wdth").innerHTML=block_width;
    document.getElementById("crrnt_hgt").innerHTML=block_height;
}

if (e.shiftKey==true&&keypress=='80'){
    block_height=block_height+10;
    block_width=block_width+10;
    document.getElementById("crrnt_wdth").innerHTML=block_width;
    document.getElementById("crrnt_hgt").innerHTML=block_height;
}
}

function up(){
    if (player_y>=0){
        player_y=player_y-10;
        canvas.remove(player_object);
        player_update();
    }
}


function down(){
    if (player_y>=0){
        player_y=player_y+10;
        canvas.remove(player_object);
        player_update();
    }
}


function left(){
    if (player_x>0){
        player_x=player_x-10;
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if (player_x<800){
        player_x=player_x+10;
        canvas.remove(player_object);
        player_update();
    }
}


