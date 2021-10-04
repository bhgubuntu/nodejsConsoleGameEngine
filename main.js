// require the color module to print different colored matter
const colors = require('colors');
// 2d engine, camera for the 3d world, made out of 2 letters per "pixle/atom"

// get width * height of console / terminal

var x = process.stdout.columns;
var y = process.stdout.rows;

const terminal = {
  width: process.stdout.columns,
  height: process.stdout.rows
}

const monitor = {
  width: terminal.width / 2,
  height: terminal.height
}

const matrix = new Array(360).fill(" ").map(() => new Array(180).fill(" "));

const draw = function () {
  for (i = 0; i < 180; i++) {
    for (j = 0; j < 360; j++) {
      process.stdout.write(matrix[j][i]);
    }
  }
}

const interface = {
  objects: {
    crosshairs: {
      x: 160,
      y: 90,
      image: [
        [" ", "|", "|", " "],
        ["=", " ", " ", "="],
        [" ", "|", "|", " "]
      ]

    }
  }
}
function loadSprite(x, y, image) {

  for (i = 0; i < image.length; i++) {
    for (v = 0; v < image[i].length; v++) {
      matrix[x+i][y+v] = image[i][v];
    }
  }
};

loadSprite(interface.objects.crosshairs.x, interface.objects.crosshairs.y, interface.objects.crosshairs.image);

const engine = {
  world: {
    x: [],
    y: [],
    z: []
  }
/*
  render() {

  },
  draw() {

  }
*/
}

console.log(terminal.width , terminal.height);
console.clear();
console.log("yellow".yellow + "brightyellow".brightYellow);
//console.log(matrix);
draw();
//console.log(matrix);
var stdin = process.stdin;

// without this, we would only get streams once enter is pressed
stdin.setRawMode( true );

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
stdin.resume();

// i don't want binary, do you?
stdin.setEncoding( 'utf8' );

// on any data into stdin
stdin.on( 'data', function( key ){
  // ctrl-c ( end of text )
  if ( key === '\u0003' ) {
    process.exit();
  }
  //arrow key presses
  if (key == '\u001B\u005B\u0041') {
     process.stdout.write('up');
  }
  if (key == '\u001B\u005B\u0043') {
     process.stdout.write('right');
  }
  if (key == '\u001B\u005B\u0042') {
     process.stdout.write('down');
  }
  if (key == '\u001B\u005B\u0044') {
     process.stdout.write('left'.green);
  }
  // write the key to stdout all normal like
  //process.stdout.write( key );
});


// Z axis for gui
/*function loop() {
  //Game logic here

  draw();
}
loop();*/
