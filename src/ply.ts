//Polymorphisum

class Shape{
    gerArea(){
        return 0;
    }
}

class Circle extends Shape {
    radious : number;

    constructor(radious: number){
        super();
        this.radious = radious;
    }
    gerArea(): number {
        return Math.PI*this.radious*this.radious;
    }
}

class Rectangle extends Shape {
    hight:number;
     width: number;

     constructor(hight: number, width:number){
        super();
        this.hight = hight;
        this.width = width;
     }
    gerArea(): number {
        return this.hight*this.width;
    }
}

const gerArea = (param : Shape) =>{
    console.log(param.gerArea())
}

const pd = new Shape();
const pd1 = new Circle(10);
const pd2 = new Rectangle(10,20);
gerArea(pd2)