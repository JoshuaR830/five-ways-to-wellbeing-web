const centerX = 100;
const centerY = 100;

window.addEventListener("load", function() {
    let c = document.getElementById("graph-canvas");
    let graph = c.getContext("2d");
    
    let numberOfArcs = 5;
    
    calculateArc(graph, numberOfArcs, 0, 100, way_to_wellbeing_connect)
    calculateArc(graph, numberOfArcs, 1, 10, way_to_wellbeing_be_active)
    calculateArc(graph, numberOfArcs, 2, 100, way_to_wellbeing_keep_learning)
    calculateArc(graph, numberOfArcs, 3, 40, way_to_wellbeing_take_notice)
    calculateArc(graph, numberOfArcs, 4, 100, way_to_wellbeing_give)
})

function calculateArc(graph, numberOfArcs, arcNumber, radius, fill) {
    
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
    graph.arc(centerX, centerY, radius, arcStart * Math.PI, arcEnd * Math.PI)
    graph.fillStyle = fill
    graph.fill();
    graph.closePath();
}