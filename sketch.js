function setup() {
  createCanvas(400, 400)
}

function draw() {
  background(0,0,139)
  createground()
  createmoon()
  createbulidings()
  createwindows()
  createdoors()
  createdoorknobs()
}
//draw ground
function createground() { noStroke()
                         fill ("green")
                         rect (260,380,180,130)
                        fill("green")
                         rect(80,380,180,130)
                         fill("green")
                         rect(1,380,180,130)
  
}
//draw moon
function createmoon() { fill ("white")
                       ellipse (50,60,80,80)
  
}

//draw bulidings
function createbulidings() { fill (150,112,159)
                            rect (10,200,105,180)
                            fill (150,112,159)
                            rect (150,200,105,180)
                            fill (150,112,159)
                            rect (290,200,105,180)
                            
  
}
//draw windows
function createwindows(){
  fill ("white")
  rect (170,230,20,20)
  fill ("white")
  rect (210,230,20,20)
  fill ("white")
  rect (170,270,20,20)
  fill ("white")
  rect (210,270,20,20)
  fill ("white")
  rect (170,310,20,20)
  fill ("white")
  rect (210,310,20,20)
  fill ("white")
  rect (70,230,20,20)
  fill("white")
  rect (30,230,20,20)
  fill ("white")
  rect (30,270,20,20)
  fill ("white")
  rect (70,270,20,20)
  fill ("white")
  rect (70,310,20,20)
  fill ("white")
  rect (30,310,20,20)
  fill ("white")
  rect (310,230,20,20)
  fill ("white")
  rect (350,230,20,20)
  fill ("white")
  rect (350,270,20,20)
  fill ("white")
  rect (310,270,20,20)
  fill ("white")
  rect (310,310,20,20)
  fill ("white")
  rect (350,310,20,20)
  
  
}
//draw doors and doorknobs
function createdoors() {
fill (45,58,68)
rect (325,340,30,40)
  fill (45,58,68)
  rect (185,340,30,40)
  fill (45,58,68)
  rect (45,340,30,40)
}
function createdoorknobs () {
  fill ("black")
  ellipse (193,360,10,10)
  fill ("black")
  ellipse (333,360,10,10)
  fill ("black")
  ellipse()
}
