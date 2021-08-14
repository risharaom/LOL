function preload(){

}
function setup(){
    canvas=createCanvas(400, 200);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";

}
function draw(){
image(video,0,0,640,480);
tint(tint_color);

stroke(0, 128, 0);
  
  var r=150;
  for(i=0;i<=15;i++){
    circle(0,0,r);
    r=r-10
  }
   var r=150;
  for(i=0;i<=15;i++){
    circle(0,100,r);
    r=r-10
  }
    var r=150;
  for(i=0;i<=15;i++){
    circle(0,200,r);
    r=r-10
  }
  var r=150;
  for(i=0;i<=15;i++){
    circle(400,0,r);
    r=r-10
  }
  
   var r=150;
  for(i=0;i<=15;i++){
    circle(400,100,r);
    r=r-10
  }
  var r=150;
  for(i=0;i<=15;i++){
    circle(400,200,r);
    r=r-10
  }
}
function take_snapshot(){
    save("risha.png");
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}