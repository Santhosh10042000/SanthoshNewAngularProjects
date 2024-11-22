import { Component, signal } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TableDataService } from '../../Service/table-data.service';

@Component({
  selector: 'app-chart-component',
  templateUrl: './chart-component.component.html',
  styleUrl: './chart-component.component.css'
})
export class ChartComponentComponent {
  readonly panelOpenState = signal(false);
  constructor(private productService: TableDataService) {}
  SpinnerFlag:boolean=false;
  ngOnInit() {
    setTimeout(() => {
      this.SpinnerFlag=true;
    }, 2000);
    }
    ClickHere(){
      this.productService.setLoggedIn(true)
    }
}
