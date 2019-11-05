center1 = {x: 100, y: 100};
center2 = {x: 200, y: 100};

control1 = {x: 50, y:150};
control2 = {x: 0, y: 250};

radius = 50;
bridgeWidth = 10;

function midPoint(p1, p2) {
    return {
        x: (p1.x + p2.x) / 2,
        y: (p1.y + p2.y) / 2
    }
}

function pLine(p1, p2) {
    line(p1.x, p1.y, p2.x, p2.y);
}

function pCircle(coords, radius) {
    circle(coords.x, coords.y, radius);
}


function pointOnAngle(angle, radius, center) {
    radians = angle * Math.PI / 180;
    var x = center.x + (radius / 2) * Math.cos(radians);
    var y = center.y + (radius / 2) * Math.sin(radians);
    return { x: x, y: y };
}


function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(220);
    noFill();
  
    circle(center1.x, center1.y, radius);
    circle(center2.x, center2.y, radius);
  
    pLine(center1, center2);
  
    var mid = midPoint(center1, center2);
  
    circle(mid.x, mid.y, 6);
    line(
        mid.x, mid.y + bridgeWidth,
        mid.x, mid.y - bridgeWidth
    );

    
    curve(
        control1.x, control1.y,    // first control
        300, 350,   // start
        150, 200,   // end
        control2.x, control2.y    // 2nd control
    );

    circle(control1.x, control1.y, 5);
    circle(control2.x, control2.y, 5);

    var anglePoint1 = pointOnAngle(45, radius, center1);
    var anglePoint2 = pointOnAngle(-45, radius, center1);
    pCircle(anglePoint1, 5);
    pCircle(anglePoint2, 5);
}