import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  getItemCount() {
    return this.dataService.getLoadedData().map(d => d.items.length);
  }

}
