

noseX = ""
noseY = ""

function preload()
{
    clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    image(video, 0, 0, 500, 500);

    image(clown_nose, noseX, noseY, 40, 40);
}

function take_snapshot()
{
    save("ClownNose.png");
}

function modelLoaded()
{
    console.log("PoseNet is initialized.");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -15;
        noseY = results[0].pose.nose.y -15;
        console.log("Nose X = "+ noseX);
        console.log("Nose Y = "+ noseY);
    }
}



