var keys = {
    37: 'left',
    39: 'right',
    40: 'down',
    38: 'rotate'
};

document.body.onkeydown = function( e ) {
    if ( typeof keys[ e.keyCode ] != 'undefined' ) {
        keyPress( keys[ e.keyCode ] );
        render();
    }
};

canvas = document.getElementById('canvas');

cw = document.body.clientWidth;
ch = document.body.clientHeight;

if (2*cw < ch) {
    canvas.width = cw;
    canvas.height = 2*cw;
}
else {
    canvas.width = ch/2;
    canvas.height = ch;
}

function link( left, right ) {
    Hammer(canvas).on(left, function(event) {
        keyPress( right );
        render();
    });
}

link('swipeleft', 'left');
link('swiperight', 'right');
link('swipedown', 'down');
link('swipeup', 'rotate');
