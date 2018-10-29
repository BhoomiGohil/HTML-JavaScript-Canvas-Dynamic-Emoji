var imported = document.createElement("script"); // Import Script file
imported.src = "FunctionAndIfCondition.js";
document.head.appendChild(imported);

var heightAndWidth = 450;
var middle = heightAndWidth / 2;

var canvas = document.getElementById("emocanvas"); // Get emocanvas class to do operation
var ctx = canvas.getContext("2d");

canvas.width = canvas.height = heightAndWidth; // set width and height

// Clear Box before apply design
function clear(ctx) {
  ctx.clearRect(0, 0, heightAndWidth, heightAndWidth);
}

// If text is empty then it display enter radius.
function enterRadius() {
  return document.getElementById("message").innerHTML = "Enter Radius";
}

// If text is empty then it display number is not in range.
function notInRange() {
  return document.getElementById("message").innerHTML = "Number is not in range";
}

// It is going to delete message.
function empty() {
  return document.getElementById("message").innerHTML = "";
}

// Set width of lines in different range

function width(val) {
  var a = 2;
  for (i = 40; i <= val; i = i + 10) {
    a++;
  }
  return ctx.lineWidth = a;
}

// Apply color and shape to an emoji
function design(ctx) {
  ctx.fillStyle = "#ffbe00";
  ctx.strokeStyle = "#ffbe00";
  ctx.lineCap = "round";
}

function halfValue(val) { // Half the radius value
  return val / 2;
}

function smile(val) { // Display set size of happysmile of emoji
  return val - (halfValue(val)) + num567(val);
}

function sad(val) { // Display set size of sadsmile of emoji
  return middle + num567(val) + val;
}

function chin(val) { // Display chin of emoji
  return middle + val - num101214(val);
}

function circle(val) { // Display circle of emoji
  ctx.beginPath();

  ctx.arc(middle, middle, val, 0, 7);
  ctx.stroke();

  ctx.closePath();
}

function eyeCircleLeft(val) { // Display circle left eye of emoji
  ctx.beginPath();

  ctx.arc((middle - halfValue(val)) + num345(val), middle - halfValue(val) + num101112(val), num567(val), 0, 7);
  ctx.fill();

  ctx.closePath();
}

function eyeCircleRight(val) { // Display circle right eye of emoji
  halfValue(val);
  ctx.beginPath();

  ctx.arc((middle + halfValue(val)) - num345(val), middle - halfValue(val) + num101112(val), num567(val), 0, 7);
  ctx.fill();

  ctx.closePath();
}

function happysmile(val) { // Display happy smile of emoji
  ctx.beginPath();

  ctx.arc(middle, middle, smile(val), 7, 2.4);
  ctx.stroke();

  ctx.closePath();
}

function eyeWinkLeft(val) { // Display left wink eye of emoji
  ctx.beginPath();

  ctx.arc((middle - halfValue(val)) + num345(val), middle - halfValue(val) + num111213(val), num567(val), 3.1, 6.3);
  ctx.stroke();

  ctx.closePath();
}

function eyeWinkRight(val) { // Display Right wink eye of emoji
  halfValue(val);
  ctx.beginPath();

  ctx.arc((middle + halfValue(val)) - num345(val), middle - halfValue(val) + num111213(val), num567(val), 3.1, 6.3);
  ctx.stroke();

  ctx.closePath();
}

function bigsmileline(val) { // Display big smile line of emoji
  ctx.beginPath();

  ctx.moveTo(middle - (smile(val) + num357(val)), middle);
  ctx.lineTo(middle + (smile(val) + num357(val)), middle);
  ctx.stroke();

  ctx.closePath();
}

function bigsmile(val) { // Display big smile of emoji
  ctx.beginPath();

  ctx.arc(middle, middle, smile(val) + num357(val), 0, 3.1);
  ctx.stroke();

  ctx.closePath();
}

function sadsmile(val) { // Display sad smile of emoji
  ctx.beginPath();

  ctx.arc(middle, sad(val), smile(val), 4, 5.4);
  ctx.stroke();

  ctx.closePath();
}

function bigsmileSmallLine(val) {  // Display small line of emoji
  ctx.beginPath();

  ctx.moveTo((middle - halfValue(val)) + num345(val), (middle + halfValue(val)) - num345(val));
  ctx.lineTo((middle + halfValue(val)) - num345(val), (middle + halfValue(val)) - num345(val));
  ctx.stroke();

  ctx.closePath();
}

function eyeWinkLeftUp(val) { // Display left wink eye up of emoji
  ctx.beginPath();

  ctx.arc((middle - halfValue(val)) + num345(val), middle - halfValue(val) + num101112(val), num567(val), 0, 3.1);
  ctx.stroke();

  ctx.closePath();
}

function eyeWinkRightUp(val) { // Display rigth wink eye up of emoji
  ctx.beginPath();

  ctx.arc((middle + halfValue(val)) - num345(val), middle - halfValue(val) + num101112(val), num567(val), 0, 3.1);
  ctx.stroke();

  ctx.closePath();
}

function tongueLineLeft(val) { // Display tougue line left of emoji
  ctx.beginPath();

  ctx.moveTo(middle - num81012(val), (middle + halfValue(val)) + num456(val));
  ctx.lineTo(middle - num81012(val), (middle + halfValue(val)) + num101315(val));
  ctx.stroke();

  ctx.closePath();
}

function tongueLineRight(val) { // Display tougue line right of emoji
  ctx.beginPath();

  ctx.moveTo((middle + num81012(val)), (middle + halfValue(val)) + num456(val));
  ctx.lineTo((middle + num81012(val)), (middle + halfValue(val)) + num101315(val));
  ctx.stroke();

  ctx.closePath();
}

function tonguebottom(val) { // Display tougue chin emoji
  ctx.beginPath();

  ctx.arc(middle, chin(val), num81012(val), 0, 3.1);
  ctx.stroke();

  ctx.closePath();
}

function tongueLeftbottom(val) { // Display left tougue 
  ctx.beginPath();

  ctx.arc((middle - halfValue(val)) + num567(val), (middle + halfValue(val)) + num123(val), num6810(val), 6.6, 4.2);
  ctx.stroke();

  ctx.closePath();
}

function tongueRightbottom(val) { // Display right tougue 
  ctx.beginPath();

  ctx.arc((middle + halfValue(val)) - num567(val), (middle + halfValue(val)) + num123(val), num6810(val), 5.3, 2.8);
  ctx.stroke();

  ctx.closePath();
}

function smilecircle(val) { // Display round smile circle 
  ctx.beginPath();

  ctx.arc(middle, middle + halfValue(val) - num567(val), num101315(val), 0, 8);
  ctx.stroke();

  ctx.closePath();
}

function eyeHalfLeft(val) { // Display half left eye 
  ctx.beginPath();

  ctx.arc((middle - halfValue(val)) + num345(val), middle - halfValue(val) + num101112(val), num567(val), 0.7, 3.6);
  ctx.fill();

  ctx.closePath();
}

function eyeHalfRight(val) { // Display half right eye 
  ctx.beginPath();

  ctx.arc((middle + halfValue(val)) - num345(val), middle - halfValue(val) + num101112(val), num567(val), 5.9, 2.6);
  ctx.fill();

  ctx.closePath();
}

function eyeSadLeft(val) { // Display sad half left eye 
  ctx.beginPath();

  ctx.arc((middle - halfValue(val)) + num345(val), middle, num567(val), 5.8, 3);
  ctx.fill();

  ctx.closePath();
}

function eyeSadRight(val) { // Display sad half right eye 
  ctx.beginPath();

  ctx.arc((middle + halfValue(val)) - num345(val), middle, num567(val), 6.5, 3.6);
  ctx.fill();

  ctx.closePath();
}

function extraSadsmile(val) { // Display extra sad smile

  ctx.beginPath();

  ctx.arc(middle, sad(val) + num345(val), smile(val), 4, 5.4);
  ctx.stroke();

  ctx.closePath();
}

function laughSideCircleLeft(val) { // Display laugh side Circle left
  ctx.beginPath();
  ctx.arc((middle - val) + num234(val), middle + num678(val) - num012(val), num7911(val), 0, 7);
  ctx.fill();

  ctx.closePath();
}

function laughSideCircleRight(val) { // Display laugh side Circle right
  ctx.beginPath();

  ctx.arc((middle + val) - num234(val), middle + num678(val) - num012(val), num7911(val), 0, 7);
  ctx.fill();

  ctx.closePath();
}

function laughLeftTriangle(val) { // Display laugh side left triangle
  ctx.beginPath();

  ctx.moveTo(middle - halfValue(val) - num234(val), middle - num6810(val));
  ctx.lineTo(middle - val + num81114(val), middle + num101112(val));
  ctx.lineTo(middle - val, middle - num135(val));
  ctx.fill();

  ctx.closePath();
}

function laughRightTriangle(val) { // Display laugh side right triangle
  ctx.beginPath();

  ctx.moveTo(middle + halfValue(val) + num234(val), middle - num6810(val));
  ctx.lineTo(middle + val - num81114(val), middle + num101112(val));
  ctx.lineTo(middle + val, middle - num135(val));
  ctx.fill();

  ctx.closePath();
}

function sadSideCircleLeft(val) { // Display sad circle left
  ctx.beginPath();

  ctx.arc(middle - halfValue(val) - num345(val), middle + halfValue(val) - num8910(val), num6810(val) + 0.8, 0, 7);
  ctx.fill();

  ctx.closePath();
}

function sadSideCircleRight(val) { // Display sad circle right
  ctx.beginPath();

  ctx.arc(middle + halfValue(val) + num345(val), middle + halfValue(val) - num8910(val), num6810(val) + 0.8, 0, 7);
  ctx.fill();

  ctx.closePath();
}

function sadLeftTriangle(val) { // Display sad circle left triangle
  ctx.beginPath();

  ctx.moveTo(middle - halfValue(val) - num345(val), middle - num6810(val));
  ctx.lineTo(middle - halfValue(val) + num456(val), middle + num101418(val));
  ctx.lineTo(middle - val + num101214(val), middle + num101418(val));
  ctx.fill();

  ctx.closePath();
}

function sadRightTriangle(val) { // Display sad circle right triangle
  ctx.beginPath();

  ctx.moveTo(middle + halfValue(val) + num345(val), middle - num6810(val));
  ctx.lineTo(middle + halfValue(val) - num456(val), middle + num101418(val));
  ctx.lineTo(middle + val - num101214(val), middle + num101418(val));
  ctx.fill();

  ctx.closePath();
}
