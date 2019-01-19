class clockNode {
  constructor(x, y) {
    this.x = x ;
    this.y = y ;
    this.r = width * height * 0.000075 ;
  }
  show(v) {
    stroke(255) ;
    strokeWeight(3) ;
    fill(v ? 255 : 51) ;
    ellipse(this.x, this.y, this.r) ;
  }
}

class clockColumn {
  constructor(t, u, x, y, xspc, yspc) {
    this.x = x ;
    this.y = y ;
    this.xspacing = xspc ;
    this.yspacing = yspc ;
    this.tens = [] ;
    this.units = [] ;
    for(let i = 0 ; i < t ; i++) {
      this.tens.push(new clockNode(this.x, this.y - i * this.yspacing)) ;
    }
    for(let i = 0 ; i < u ; i++) {
      this.units.push(new clockNode(this.x + this.xspacing, this.y - i * this.yspacing)) ;
    }
  }
  show(val) {
    let vUnit = toBinary(val % 10) ;
    let vTen = toBinary(int(val / 10)) ;
    for(let i = 0 ; i < this.tens.length ; i++) {
      this.tens[i].show(vTen.length > i && vTen[i] ? 1 : 0) ;
    }
    for(let i = 0 ; i < this.units.length ; i++) {
      this.units[i].show(vUnit.length > i && vUnit[i] ? 1 : 0) ;
    }
  }
}

class binaryClock {
  constructor() {
    this.h = new clockColumn(2, 4, width / 8, height / 1.5, width / 10, height / 10) ;
    this.m = new clockColumn(3, 4, width / 2.5, height / 1.5, width / 10, height / 10) ;
    this.s = new clockColumn(3, 4, width / 1.5, height / 1.5, width / 10, height / 10) ;
  }
  show() {
    translate(25, 0) ;
    this.h.show(hour()) ;
    this.m.show(minute()) ;
    this.s.show(second()) ;
  }
}
