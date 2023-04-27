import { IArea } from "../interface/IArea";
import { IVolume } from "../interface/IVolume";
import { threeDFigure } from "./3DFigure";
export class TriangularPyramid extends threeDFigure implements IArea,IVolume{
    pyramid_area: number = 0;
    pyramid_volume: number = 0;
    constructor (override type: string,public a:number,public h:number){
        super();
    }
    area(){
        let basePerimeter = this.a*3;
        let halfPerimeter = basePerimeter / 2;
        let baseArea = Math.sqrt(halfPerimeter * (halfPerimeter - this.a) * (halfPerimeter - this.a) * (halfPerimeter - this.a));
        let slantHeight = Math.sqrt(Math.pow(this.a / 2, 2) + Math.pow(this.h, 2));
        let triangleArea = 0.5 * this.a * slantHeight;
        return this.pyramid_area = triangleArea*3 + baseArea;
        
    }
    volume(){
        return this.pyramid_volume = (this.h*(this.a*this.a))/(4*Math.sqrt(3));
    }
    show(){
        return "Тип" + this.type + " " + "Площа" + this.pyramid_area.toFixed(2) + " " + "Об'єм" + this.pyramid_volume.toFixed(2);
    }
}