leftWristX = "";
rightWristX = "";
difference = "";
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(800, 100);
    video = createCapture(VIDEO);
    video.size(640, 480)
    video.position(100, 100);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Initialized!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX)/2;
    }
}
function draw(){
    background("pink");
    textSize(difference);
    fill("red");
    text("Peter", 50, 400);
}