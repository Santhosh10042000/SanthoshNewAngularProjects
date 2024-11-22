import { Component } from '@angular/core';
import { TableDataService } from './Service/table-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project-1';
  constructor(private tableData:TableDataService){
    this.tableData.isLoggedIn$.subscribe((data:any)=>{
      console.log(data)
    })
  }
  
}
