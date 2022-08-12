song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    song = loadSound("music.mp3")
    song.setVolume(1);
    song.rate(1);
        song = loadSound("music.mp3")
    song.setVolume(1);
    song.rate(1);
        song = loadSound("music.mp3")
    song.setVolume(1);
    song.rate(1);
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("FF0000");

    circle(rightWristX, rightWristY, 20);

    if (rightWristY > 0.2) {
song1.play();
    }

    if (leftWristY > 0.2) {
        song2.play();

    }
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scroreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints(9).score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        console.log("scoreRightWrist = " + scroreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + " rightWristY " + rightWristY);
    }
}
