import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { twoDFigure } from './class/2DFigure';
import { threeDFigure } from './class/3DFigure';
import { Cube } from './class/Cube';
import { RightTriangle } from './class/RightTriangle';
import { TriangularPyramid } from './class/TriangularPyramid';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,CommonModule],
})
export class Tab1Page {
  figure3d : threeDFigure[]=[];
  figure2d : twoDFigure[]=[];
  constructor() {}
  getRandomInt(max: number){
    return Math.floor(Math.random()*Math.floor(max)+1);
  }
  ras3D(){
    this.figure3d = new Array();
    let n = 3;
    for(let i = 0; i < n; i++){
      this.figure3d.push(new TriangularPyramid("Трикутна піраміда",this.getRandomInt(9),this.getRandomInt(9)));
      this.figure3d.push(new Cube("Куб",this.getRandomInt(9)));
    }
    this.figure3d.forEach((element) => {
     element.area();
     element.volume();
     console.log(element.show());
    })
  }
  ras2D(){
    this.figure2d = new Array();
    let n = 3;
    for(let i = 0; i < n; i++){
      this.figure2d.push(new RightTriangle("Прямокутний трикутник",this.getRandomInt(9),this.getRandomInt(9)));
      
    }
    this.figure2d.forEach((element) => {
     element.area();
     element.perimeter();
     element.outRadius();
     element.inRadius();
     
     console.log(element.show())
    })
  }
}
