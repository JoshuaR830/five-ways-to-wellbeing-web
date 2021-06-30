const centerX = 100;
const centerY = 100;

const numberOfArcs = 5;
const baseRadius = 100;
const animationSpeed = 20;

let graphSize = 0;
let animationCounter = 0;

window.addEventListener("load", function() {
    let c = document.getElementById("graph-canvas");
    let graph = c.getContext("2d");

    let wayToWellbeingValues = [10, 100, 40, 100, 20]
    setWellbeingGraphView(graph, wayToWellbeingValues, true)
})

function setWellbeingGraphView(graph, wayToWellbeingValues, shouldShowNumbers) {
    let canvas = document.getElementById("graph-canvas");
    let canvasSize = Math.min(canvas.width, canvas.height)
    
    if (shouldShowNumbers) {
        graphSize = canvasSize;
    } else {
        graphSize = canvasSize
    }
    
    animate(graph, wayToWellbeingValues)
    // setInterval(function() {
    //     animate(graph, wayToWellbeingValues);
    // }, 0.1)
    
}

function animate(graph, wayToWellbeingValues) {
    
    graph.beginPath()
    graph.arc(centerX, centerY, baseRadius, 0, 2 * Math.PI);
    graph.stroke();
    graph.closePath()
    
    let connectValues = wayToWellbeingValues[0]/100
    let beActiveValues = wayToWellbeingValues[1]/100
    let keepLearningValues = wayToWellbeingValues[2]/100
    let takeNoticeValues = wayToWellbeingValues[3]/100
    let giveValues = wayToWellbeingValues[4]/100
    
    while (animationCounter <= animationSpeed) {
        console.log(animationCounter)

        callAnimate(graph, connectValues, beActiveValues, keepLearningValues, takeNoticeValues, giveValues, animationCounter)
        
        animationCounter ++;
        console.log("Hi", animationCounter)
    }
    
    // graph.clearRect(0, 0, graphSize, graphSize);

}

function callAnimate(graph, connectValues, beActiveValues, keepLearningValues, takeNoticeValues, giveValues, animationCounter) {
    setTimeout(function() {
        const animationStage = animationCounter.valueOf();
        calculateArc(graph, 0, (connectValues/animationSpeed) * animationStage, way_to_wellbeing_connect)
        calculateArc(graph, 1, (beActiveValues/animationSpeed) * animationStage, way_to_wellbeing_be_active)
        calculateArc(graph, 2, (keepLearningValues/animationSpeed) * animationStage, way_to_wellbeing_keep_learning)
        calculateArc(graph, 3, (takeNoticeValues/animationSpeed) * animationStage, way_to_wellbeing_take_notice)
        calculateArc(graph, 4, (giveValues/animationSpeed) * animationStage, way_to_wellbeing_give)
        console.log("Hi", animationStage)
        console.log(animationCounter)
    }, animationCounter * 10)
}

function calculateArc(graph, arcNumber, radius, fill) {    
    // 1/4 circle (2PI) + half an arc offset
    let arcOffset = 0.5 + 1/numberOfArcs;
    
    // Positions for start and end of the arc
    let arcStart = (arcNumber * (2/numberOfArcs)) - arcOffset;
    let arcEnd = ((arcNumber + 1) * (2/numberOfArcs)) - arcOffset;
    
    drawArc(graph, arcStart, arcEnd, radius, fill)
}

function drawArc(graph, arcStart, arcEnd, radius, fill) {
    graph.beginPath();
    console.log(centerX)
    console.log(centerY)
    graph.moveTo(centerX, centerY);
    graph.arc(centerX, centerY, radius * baseRadius, arcStart * Math.PI, arcEnd * Math.PI)
    graph.fillStyle = fill
    graph.fill();
    graph.closePath();
}