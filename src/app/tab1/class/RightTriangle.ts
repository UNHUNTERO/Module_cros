import { IArea } from "../interface/IArea";
import { IPerimeter } from "../interface/IPerimeter";
import { IRadius } from "../interface/IRadius";
import { twoDFigure } from "./2DFigure";
export class RightTriangle extends twoDFigure implements IArea,IPerimeter,IRadius{
    tperimeter: number = 0;
    tarea:number = 0;
    inR:number = 0;
    outR:number = 0;
    c:number = 0;
    constructor (override type: string,public a:number,public b:number){
        super();
        this.c = Math.sqrt(a*a+b*b);
    }
    area(){
        return this.tarea = this.a*this.b/2;
    }
    perimeter() {
        return  this.tperimeter =  this.a+this.b+this.c;
    }
    inRadius(){
        let p = this.perimeter()/2;
        return this.inR = Math.sqrt(((p-this.a)*(p-this.b)*(p-this.c))/p);
    }
    outRadius() {
        let p = this.perimeter()/2;
        return this.outR = (this.a*this.b*this.c)/(4*Math.sqrt(p*(p-this.a)*(p-this.b)*(p-this.c)));
    }
    show(){
        return "Тип" + this.type + " " + "Площа" + this.tarea.toFixed(2) + " " + "Периметр" + this.tperimeter.toFixed(2)+ " " + "Радіус вписаного кола" + this.inR.toFixed(2)+ " " + "Радіус описаного кола" + this.outR.toFixed(2);
    }
}