import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrl: './chart-component.component.css'
})
export class ChartComponentComponent {
  readonly panelOpenState = signal(false);
constructor(){}
ngoninit(){
  
}

}
