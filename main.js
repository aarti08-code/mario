function preload() 
{
	world_start=loadSound("world_start.wav");
	mario_jump=loadSound("jump.wav");
	collect_coin=loadSound("coin.wav");
	game_over=loadSound("gameover.wav");
	mario_kill=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() 
{
	canvas=createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video = createCapture(VIDEO);
    video.size(600,300);
	video.parent("camera");
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
	console.log('Model Loaded!');
  }
  
  function gotPoses(results)
  {
	if(results.length > 0)
	{
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	}
  }
  

function draw()
{
	game();
}