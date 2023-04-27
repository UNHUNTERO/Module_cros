import { IFigure } from "../interface/IFigure";
export abstract class twoDFigure implements IFigure{
    type = "2D"
    abstract show(): any;
    abstract area():any;
    abstract perimeter():void;
    abstract inRadius():void;
    abstract outRadius():void;

}