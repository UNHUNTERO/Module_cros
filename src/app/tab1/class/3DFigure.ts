import { IFigure } from "../interface/IFigure";
export abstract class threeDFigure implements IFigure{
    type = "3D";
    abstract area(): any;
    abstract volume(): any;
    abstract show(): any;
}