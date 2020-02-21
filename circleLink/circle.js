class Circle{
  constructor(){
    this.speedList = [-2, -1.5, -1, 1, 1.5, 2 ]
    this.diameter = random(30,70)
    // this.diameter = 0
    this.x = random(this.diameter, width- this.diameter)
    this.y = random(this.diameter, height-this.diameter)
    this.rayon = this.diameter/2
    this.speedX = random(this.speedList)
    this.speedY = random(this.speedList)
    this.c1 = 255
    this.c2 = 255
    this.c3 = 255
    this.weight = random(2, 3)
  }
  show(){
    stroke(this.c1, this.c2, this.c3)
    strokeWeight(2)
    fill(30, 30, 30, 0)
    rectMode(CENTER)
    rect(this.x, this.y, this.diameter, this.diameter)
  }
  move(){
    if (this.x > width -this.rayon || this.x < 0 + this.rayon){
      this.speedX *= -1
      this.x += this.speedX
  }else if (this.y > height - this.rayon|| this.y < 0 + this.rayon){
    this.speedY *= -1
    this.y += this.speedY

  }else {
    this.x += this.speedX
    this.y += this.speedY
    }
  }
  link(circle2X, circle2Y){
    this.distance = dist(this.x, this.y, circle2X, circle2Y)
    if (this.distance < 200){
      return true
    }else {
      return false
    }
  }
  alpha(circle2X, circle2Y){
    this.distance = dist(this.x, this.y, circle2X, circle2Y)
    this.a = map(this.distance, 0, 200, 255, 0)
    stroke(this.c1,this.c2,this.c3, this.a)
    // stroke(255,255,255,this.a)
    strokeWeight(this.weight)
    line(this.x,this.y,circle2X,circle2Y)
  }

}
