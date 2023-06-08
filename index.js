let date;
let hours = 0;
let minutes = 0;
let seconds = 0;
let customWidth = 400
let customHeigth = 400
let myFont;

function preload() {
  myFont = loadFont('assets/alarm clock.ttf');
}

function setup() {
  createCanvas(customWidth, customHeigth);
  frameRate(1)
  textFont(myFont);
  textSize(25);
  // text(`${hours}:${minutes}:${seconds}`, customWidth/2, customHeigth/2);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255,255,255);
  //Every time the draw() function executes (1 time every second because of the frame rate == 1)     we update the date variable and we get the, hours, minutes and seconds, and then we format       them.
  date = new Date()  
  hours = date.getHours()
  if(date.getMinutes() < 10){
    minutes = '0' + String(date.getMinutes())
  }
  else{
    minutes = date.getMinutes()
  }
  if(date.getSeconds() < 10){
    seconds = '0' + String(date.getSeconds())
  }
  else{
    seconds = date.getSeconds()
  }  
  
  noFill()
  strokeWeight(8)
  
  //We draw arcs using the funciont returnAngle
  stroke(255, 204, 0)  
  arc(customWidth/2, customHeigth/2, 300, 300,-PI/2,returnAngle('hours',parseInt(hours)));
  hoursPoints = returnPoints('hours',parseInt(hours))
  strokeWeight(8)
  line(customWidth/2, customHeigth/2,customWidth/2 + hoursPoints[0],customHeigth/2 + hoursPoints[+1] )
  
  strokeWeight(8)
  stroke(100, 0, 100)
  arc(customWidth/2, customHeigth/2, 270, 270, -PI/2, returnAngle('minutes', parseInt(minutes)));
  minutesPoints = returnPoints('minutes',parseInt(minutes))
  strokeWeight(6)
  line(customWidth/2, customHeigth/2,customWidth/2 + minutesPoints[0],customHeigth/2 +minutesPoints[+1] )
  
  strokeWeight(8)
  stroke(100, 200, 100)
  arc(customWidth/2, customHeigth/2, 240, 240, -PI/2, returnAngle('seconds', parseInt(seconds)))
  secondsPoints = returnPoints('seconds',parseInt(seconds))
  strokeWeight(4)
  line(customWidth/2, customHeigth/2,customWidth/2 + secondsPoints[0],customHeigth/2 +secondsPoints[+1] )
  
  
  strokeWeight(1)
  stroke(0,0,255)
  fill(0,0,255)
  text(`${hours}:${minutes}:${seconds}`, customWidth/2, customHeigth/16);
  textAlign(CENTER, CENTER);  
}

function returnAngle(type, value){
  //We use a switch statment for selecting the correct formula, and then we use the map function
  switch(type){
    case 'hours':
      if(value == 0) return 3/2*PI
      else return map(value,0,24,-PI/2,3/2*PI)
      break;
    case 'minutes':
      if(value == 0) return 3/2*PI
      else return map(value,0,60,-PI/2,3/2*PI)
      break;
    case 'seconds':
      if(value == 0) return 3/2*PI
      else return map(value,0,60,-PI/2,3/2*PI)
      break;
    default: return 0
  }
}

function returnPoints(type,value){
  // function to return the correct angle using trigonometry (sin and cos)
  let angleStep
  switch(type){
    case 'hours':
      angleStep = 360/24
      return [cos(radians(angleStep*value - 90))*55,sin(radians(angleStep*value - 90))*55]
      break;
    case 'minutes':
      angleStep = 360/60
      return [cos(radians(angleStep*value - 90))*65,sin(radians(angleStep*value - 90))*65]
      break;
    case 'seconds':
      angleStep = 360/60
      return [cos(radians(angleStep*value - 90))*80,sin(radians(angleStep*value - 90))*80]
      break;
    default: return 0
  }
}