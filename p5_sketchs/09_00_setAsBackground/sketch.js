let canvas;


function setup() {
    canvas = createCanvas( windowWidth, windowHeight );
    canvas.position( 0, 0 );

    // canvas.style('z-index', -1);
    // background(150, 100, 50);

}

function draw() {

    stroke(0);
    strokeWeight(3);

    if ( mouseIsPressed ) {

        line( mouseX, mouseY, pmouseX, pmouseY );

    }

}

function windowResized() {

    resizeCanvas( windowWidth, windowHeight );

}
