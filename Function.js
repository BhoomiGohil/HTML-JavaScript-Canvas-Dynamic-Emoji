var imported = document.createElement("script");
imported.src = "FunctionAndIfCondition.js";
document.head.appendChild(imported);

// Clear Box before apply design
function clear(ctx)
{
  ctx.clearRect(0, 0, 400, 400);
}

// Give Message, if text is empty, so enter radius
function enterRadius()
{
  return document.getElementById("message").innerHTML = "Enter Radius";
}

// Give Message, if text is not in the given range, so enter in range
function notInRange()
{
  return document.getElementById("message").innerHTML = "Number Not in Range";
}

// It is going to delete given message
function empty()
{
  return document.getElementById("message").innerHTML = "";
}

// Set width of lines in different range
function width(val) {
  return (val >= 30 && val <= 40) ? ctx.lineWidth = "3" : (val >= 41 && val <= 50) ? ctx.lineWidth = "4" :
         (val >= 51 && val <= 60) ? ctx.lineWidth = "5" : (val >= 61 && val <= 70) ? ctx.lineWidth = "6" :
         (val >= 71 && val <= 80) ? ctx.lineWidth = "7" : (val >= 81 && val <= 90) ? ctx.lineWidth = "8" :
         (val >= 91 && val <= 100) ? ctx.lineWidth = "9" : 0
}

// Apply color and shape to an emoji
function design(ctx) {
  ctx.fillStyle = "#ffbe00";
  ctx.strokeStyle = "#ffbe00";
  ctx.lineCap = "round";
}

function halfValue(val){
  return val / 2 ;
}

function smile(val)
{
  return val - (halfValue(val)) + num567(val);
}

function sad(val)
{
  return 200 + num567(val) + val;
}

//
function chin(val)
{
  return middle + val - num101214(val);
}

function circle(val)
{
  ctx.beginPath();

  ctx.arc(200, 200, val, 0, 7);
  ctx.stroke();

  ctx.closePath();
}

function eyeCircleLeft(val)
{
  ctx.beginPath();

  ctx.arc((200 - halfValue(val)) + num345(val) , 200 - halfValue(val) + num101112(val), num567(val), 0, 7);
  ctx.fill();

  ctx.closePath();
}

function eyeCircleRight(val)
{
  halfValue(val);
  ctx.beginPath();

  ctx.arc((200 + halfValue(val)) - num345(val) , 200 - halfValue(val) + num101112(val), num567(val), 0, 7);
  ctx.fill();

  ctx.closePath();
}

function happysmile(val)
{
  ctx.beginPath();

  ctx.arc(200, 200, smile(val), 7, 2.4);
  ctx.stroke();

  ctx.closePath();
}

function eyeWinkLeft(val)
{
  ctx.beginPath();

  ctx.arc((200 - halfValue(val)) + num345(val) , 200 - halfValue(val) + num111213(val), num567(val), 3.1, 6.3);
  ctx.stroke();

  ctx.closePath();
}

function eyeWinkRight(val)
{
  halfValue(val);
  ctx.beginPath();

  ctx.arc((200 + halfValue(val)) - num345(val) , 200 - halfValue(val) + num111213(val) , num567(val), 3.1, 6.3);
  ctx.stroke();

  ctx.closePath();
}

function bigsmileline(val)
{
  ctx.beginPath();

  ctx.moveTo(200 - (smile(val) + num369(val)), 200);
  ctx.lineTo(200 + (smile(val) + num369(val)), 200);
  ctx.stroke();

  ctx.closePath();
}

function bigsmile(val)
{
  ctx.beginPath();

  ctx.arc(200, 200, smile(val) + num369(val), 0, 3.1);
  ctx.stroke();

  ctx.closePath();
}

function sadsmile(val)
{
  ctx.beginPath();

  ctx.arc(200, sad(val) , smile(val) , 4 , 5.4);
  ctx.stroke();

  ctx.closePath();
}

function bigsmileSmallLine(val){
  ctx.beginPath();

  ctx.moveTo((200 - halfValue(val)) + num345(val) , (200 + halfValue(val)) - num345(val));
  ctx.lineTo((200 + halfValue(val)) - num345(val) , (200 + halfValue(val)) - num345(val));
  ctx.stroke();

  ctx.closePath();
}

function eyeWinkLeftUp(val)
{
  ctx.beginPath();

  ctx.arc((200 - halfValue(val)) + num345(val) , 200 - halfValue(val) + num101112(val), num567(val), 0, 3.1);
  ctx.stroke();

  ctx.closePath();
}

function eyeWinkRightUp(val)
{
  ctx.beginPath();

  ctx.arc((200 + halfValue(val)) - num345(val) , 200 - halfValue(val) + num101112(val), num567(val), 0, 3.1);
  ctx.stroke();

  ctx.closePath();
}

function tongueLineLeft(val){
  ctx.beginPath();

  ctx.moveTo(200 - num81012(val), (200 + halfValue(val)) + num456(val));
  ctx.lineTo(200 - num81012(val), (200 + halfValue(val)) + num101315(val));
  ctx.stroke();

  ctx.closePath();
}

function tongueLineRight(val){
  ctx.beginPath();

  ctx.moveTo((200 + num81012(val)), (200 + halfValue(val)) + num456(val));
  ctx.lineTo((200 + num81012(val)), (200 + halfValue(val)) + num101315(val));
  ctx.stroke();

  ctx.closePath();
}

function tonguebottom(val)
{
  ctx.beginPath();

  ctx.arc(200, chin(val), num81012(val), 0, 3.1);
  ctx.stroke();

  ctx.closePath();
}

function tongueLeftbottom(val)
{
  ctx.beginPath();

  ctx.arc((200 - halfValue(val)) + num7911(val) , (200 + halfValue(val)) + num123(val), num6810(val), 6.7 , 3.8);
  ctx.stroke();

  ctx.closePath();
}

function tongueRightbottom(val)
{
  ctx.beginPath();

  ctx.arc((200 + halfValue(val)) - num7911(val) , (200 + halfValue(val)) + num123(val), num6810(val), 5.6 , 2.7);
  ctx.stroke();

  ctx.closePath();
}

function smilecircle(val)
{
  ctx.beginPath();

  ctx.arc(200, 200 + halfValue(val) - num567(val), num101315(val), 0, 8);
  ctx.stroke();

  ctx.closePath();
}

function eyeHalfLeft(val)
{
  ctx.beginPath();

  ctx.arc((200 - halfValue(val)) + num345(val) , 200 - halfValue(val) + num101112(val), num567(val), 0.7, 3.6);
  ctx.fill();

  ctx.closePath();
}

function eyeHalfRight(val)
{
  ctx.beginPath();

  ctx.arc((200 + halfValue(val)) - num345(val) , 200 - halfValue(val) + num101112(val), num567(val), 5.9, 2.6);
  ctx.fill();

  ctx.closePath();
}

function eyeSadLeft(val)
{
  ctx.beginPath();

  ctx.arc((200 - halfValue(val)) + num345(val), 200, num567(val), 5.8, 3);
  ctx.fill();

  ctx.closePath();
}

function eyeSadRight(val)
{
  ctx.beginPath();

  ctx.arc((200 + halfValue(val)) - num345(val), 200, num567(val), 6.5, 3.6);
  ctx.fill();

  ctx.closePath();
}

function extraSadsmile(val)
{

  ctx.beginPath();

  ctx.arc(200, sad(val) + num345(val), smile(val) , 4 , 5.4);
  ctx.stroke();

  ctx.closePath();
}

function laughSideCircleLeft(val)
{
  ctx.beginPath();
  ctx.arc((200 - val) + num234(val), 200 + num678(val) - num012(val), num7911(val), 0, 7);
  ctx.fill();

  ctx.closePath();
}

function laughSideCircleRight(val)
{
  ctx.beginPath();

  ctx.arc((200 + val) - num234(val), 200 + num678(val) - num012(val), num7911(val), 0, 7);
  ctx.fill();

  ctx.closePath();
}

function laughLeftTriangle(val)
{
  ctx.beginPath();

  ctx.moveTo(200 - halfValue(val) - num234(val), 200 - num6810(val));
  ctx.lineTo(200 - val + num81114(val), 200 + num101112(val));
  ctx.lineTo(200 - val, 200 - num135(val));
  ctx.fill();

  ctx.closePath();
}

function laughRightTriangle(val)
{
  ctx.beginPath();

  ctx.moveTo(200 + halfValue(val) + num234(val), 200 - num6810(val));
  ctx.lineTo(200 + val - num81114(val), 200 + num101112(val));
  ctx.lineTo(200 + val, 200 - num135(val));
  ctx.fill();

  ctx.closePath();
}

function sadSideCircleLeft(val)
{
  ctx.beginPath();

  ctx.arc(200 - halfValue(val) - num345(val), 200 + halfValue(val) - num789(val), num7911(val), 0, 7);
  ctx.fill();

  ctx.closePath();
}

function sadSideCircleRight(val)
{
  ctx.beginPath();

  ctx.arc(200 + halfValue(val) + num345(val), 200 + halfValue(val) - num789(val), num7911(val), 0, 7);
  ctx.fill();

  ctx.closePath();
}

function sadLeftTriangle(val)
{
  ctx.beginPath();

  ctx.moveTo(200 - halfValue(val) - num345(val), 200 - num6810(val));
  ctx.lineTo(200 - halfValue(val) + num456(val), 200 + num101418(val));
  ctx.lineTo(200 - val + num101214(val), 200 + num101418(val));
  ctx.fill();

  ctx.closePath();
}

function sadRightTriangle(val)
{
  ctx.beginPath();

  ctx.moveTo(200 + halfValue(val) + num345(val), 200 - num6810(val));
  ctx.lineTo(200 + halfValue(val) - num456(val), 200 + num101418(val));
  ctx.lineTo(200 + val - num101214(val), 200 + num101418(val));
  ctx.fill();

  ctx.closePath();
}
