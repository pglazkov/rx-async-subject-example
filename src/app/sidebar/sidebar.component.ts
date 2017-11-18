import { Component } from '@angular/core';
import { SharedData } from '../shared-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private sharedData: SharedData) { }

  getItemCount() {
    return this.sharedData.value.map(d => d.items.length);
  }
}
