var imported = document.createElement("script");
imported.src = "Function.js";
document.head.appendChild(imported);

var middle = 200;
var ctx = document.getElementById("emocanvas").getContext("2d");

/////////////////////////////////////////////////////////////////////Emo1////////////////////////////////////////////////////////////////////////////////////
function emo1(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);

    circle(val);
    eyeCircleLeft(val);
    eyeCircleRight(val);
    happysmile(val);
  }
}

/////////////////////////////////////////////////////////////////////Emo2////////////////////////////////////////////////////////////////////////////////////
function emo2(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);

    circle(val);
    eyeCircleLeft(val);
    eyeWinkRight(val);
    happysmile(val);
  }
}

/////////////////////////////////////////////////////////////////////Emo3////////////////////////////////////////////////////////////////////////////////////
function emo3(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);

    circle(val);
    eyeCircleLeft(val);
    eyeCircleRight(val);
    bigsmileline(val);
    bigsmile(val);
  }
}

/////////////////////////////////////////////////////////////////////Emo4////////////////////////////////////////////////////////////////////////////////////
function emo4(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);
    circle(val);
    eyeWinkLeft(val);
    eyeWinkRight(val);
    happysmile(val);
  }
}

/////////////////////////////////////////////////////////////////////Emo5////////////////////////////////////////////////////////////////////////////////////
function emo5(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);

    circle(val);
    eyeCircleLeft(val);
    eyeCircleRight(val);
    sadsmile(val);
  }
}

/////////////////////////////////////////////////////////////////////Emo6////////////////////////////////////////////////////////////////////////////////////
function emo6(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);

    circle(val);
    eyeCircleLeft(val);
    eyeCircleRight(val);
    bigsmileSmallLine(val);
  }
}

/////////////////////////////////////////////////////////////////////Emo7////////////////////////////////////////////////////////////////////////////////////
function emo7(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);

    circle(val);
    eyeWinkLeftUp(val);
    eyeWinkRightUp(val);
    sadsmile(val);
  }
}

/////////////////////////////////////////////////////////////////////Emo8////////////////////////////////////////////////////////////////////////////////////
function emo8(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);

    circle(val);
    eyeWinkLeft(val);
    eyeWinkRight(val);
    bigsmileline(val);
    bigsmile(val);
  }
}

/////////////////////////////////////////////////////////////////////Emo9////////////////////////////////////////////////////////////////////////////////////
function emo9(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);

    circle(val);
    eyeCircleLeft(val);
    eyeWinkRight(val);
    happysmile(val);
    tongueLineLeft(val);
    tongueLineRight(val);
    tonguebottom(val);
  }
}

/////////////////////////////////////////////////////////////////////////////Emo10/////////////////////////////////////////////////////////////////////////////
function emo10(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);


    circle(val);
    eyeWinkLeft(val);
    eyeWinkRight(val);
    happysmile(val);
    tongueRightbottom(val);
  }
}

/////////////////////////////////////////////////////////////////////Emo11////////////////////////////////////////////////////////////////////////////////////
function emo11(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);

    circle(val);
    eyeWinkLeft(val);
    eyeWinkRight(val);
    bigsmileline(val);
    bigsmile(val);
    laughSideCircleLeft(val);
    laughSideCircleRight(val);
    laughLeftTriangle(val);
    laughRightTriangle(val);
  }
}

function emo12(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);

    circle(val);
    eyeCircleLeft(val);
    eyeCircleRight(val);
    smilecircle(val);
  }
}

function emo13(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);

    circle(val);
    eyeHalfLeft(val);
    eyeHalfRight(val);
    sadsmile(val);
  }
}

function emo14(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);

    circle(val);
    eyeHalfLeft(val);
    eyeHalfRight(val);
    happysmile(val);
  }
}

function emo15(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);

    circle(val);
    eyeSadLeft(val);
    eyeSadRight(val);
    extraSadsmile(val);
  }
}

function emo16(val)
{
  clear(ctx);

  if (val == "")
  {
    enterRadius();
  }
  else if(val < 40 || val > 100)
  {
    notInRange();
  }
  else if(val >= 40 || val <= 100)
  {
    val = parseInt(val);
    empty();
    width(val);
    design(ctx);

    circle(val);
    eyeCircleLeft(val);
    eyeCircleRight(val);
    sadsmile(val);
    sadSideCircleLeft(val);
    sadSideCircleRight(val);
    sadLeftTriangle(val);
    sadRightTriangle(val);
  }
}
