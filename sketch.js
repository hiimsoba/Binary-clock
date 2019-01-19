let clock ;

function setup() {
  createCanvas(800, 800) ;
  clock = new binaryClock() ;
}

function draw() {
  background(0) ;
  clock.show() ;
}

function toBinary(v) {
  let res = [] ;
  while(int(v)) {
    res.push(v % 2) ;
    v = int(v / 2) ;
  }
  return res ;
}
