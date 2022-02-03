const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var j;
var k;
var l;
var m;
var o;
var p;
var q;
var r;
var s;
var t;
var u; 
var v; 
var w,x,y,z;
var A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z;
var LA1;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a19,a20,a21,a22,a23,a24,a25,a26
var flag

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	A = createSprite(380,0,700,20);
	B = createSprite(380,800,700,20);
 
	C = createSprite(500,220,20,400);
	D = createSprite(180,170,300,20);
	E = createSprite(320,230,20,130);
	F = createSprite(340,410,300,20);
	G = createSprite(180,355,20,130);
	H = createSprite(180,530,300,20);
	I = createSprite(180,600,20,130);
	J = createSprite(260,655,140,20);
	K = createSprite(500,480,20,130);
	L = createSprite(620,220,20,400);
	M = createSprite(670,530,130,20);
	N = createSprite(610,720,20,130);
	O = createSprite(540,665,130,20);
	P = createSprite(460,290,80,20);
	Q = createSprite(180,95,300,20);
	R = createSprite(20,400,20,800);
	S = createSprite(740,400,20,800);


	a = createSprite(380,20,700,20);
	b = createSprite(380,780,700,20);
  
	e = createSprite(550,145,40,40);
	g = createSprite(500,100,20,200);
	h = createSprite(550,190,100,20);
	i = createSprite(600,150,20,100);
	j = createSprite(260,150,20,300);
	k = createSprite(310,100,100,20);
	l = createSprite(380,305,20,210);
	m = createSprite(490,305,240,20);
	n = createSprite(600,350,20,110);
	o = createSprite(660,395,120,20);
	p = createSprite(200,200,100,20);
	q = createSprite(155,295,20,210);
	r = createSprite(80,100,110,20);
	s = createSprite(205,395,120,20);
	t = createSprite(255,450,20,130);
	u = createSprite(315,505,140,20);
	v = createSprite(490,520,20,240);
	w = createSprite(335,630,300,20);
	x = createSprite(610,640,20,280);
	y = createSprite(90,510,120,20);
	z = createSprite(320,700,20,140);

	a1 = createSprite(290,113,330,20);
   a2 = createSprite(660,113,150,20);
   a3 = createSprite(575,303,20,400);
   a4 = createSprite(659,310,20,100);
   a5 = createSprite(690,350,80,20);
   a6 = createSprite(625,493,80,20);
   a7 = createSprite(230,233,20,230);
   a8 = createSprite(450,220,238,20);
   a9 = createSprite(285,353,130,20);
   a11 = createSprite(355,408,20,130);
   a10 = createSprite(510,353,110,20);
   a12 = createSprite(420,463,110,20);
   a13 = createSprite(80,230,100,20);
   a14 = createSprite(120,280,20,120);
   a15 = createSprite(80,463,100,20);
   a16 = createSprite(80,563,100,20);
   a17 = createSprite(230,563,20,210);
   a18 = createSprite(180,663,120,20);
   a19 = createSprite(440,593,440,20);
   a20 = createSprite(465,533,20,130);
   a21 = createSprite(575,650,20,120);
   a22 = createSprite(655,730,20,120);
   a23 = createSprite(445,700,250,20);
   a24 = createSprite(330,750,20,100);
   a25 = createSprite(200,770,20,65);
   a26 = createSprite(300,30,20,65);

	c = createSprite(Math.round(random(20,350)),Math.round(random(20,780)),40,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

 



  drawSprites();
keyPressed();
}

function keyPressed(){
	if (keyCode === 37){
		e.x = e.x-6
	}
	if (keyCode === 39){
		e.x = e.x+6
	}
	if (keyCode === 40){
		e.y = e.y+6
	}
	if (keyCode === 38){
		e.y = e.y-6
	}
}
