import { IArea } from "../interface/IArea";
import { IVolume } from "../interface/IVolume";
import { threeDFigure } from "./3DFigure";
export class Cube extends threeDFigure implements IArea,IVolume{
    cube_area: number = 0;
    cube_volume: number = 0;
    constructor (override type: string,public x:number){
        super();
    }
    area(){
        return this.cube_area = this.x*this.x*6
    }
    volume(){
        return this.cube_volume = Math.pow(this.x,3)
    }
    show(){
        return "Тип" + this.type + " " + "Площа" + this.cube_area.toFixed(2) + " " + "Об'єм" + this.cube_volume.toFixed(2);
    }
}