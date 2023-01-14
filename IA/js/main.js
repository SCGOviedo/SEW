// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
var engine = Engine.create();

// create a renderer
// Game distribution
const gameSize = { w: window.innerWidth, h: window.innerHeight }
var render = Render.create({
    element: document.body,
    engine: engine,   
    options: { width: gameSize.w, height: gameSize.h }
});

// create two boxes and a ground
var boxA = Bodies.circle(400, 200, 80, 80);
var boxB = Bodies.circle(450, 50, 80, 80);
var ground = Bodies.rectangle(0,gameSize.h-50, gameSize.w, 200, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);
