import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items: string[] = [];
  isLoading = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  async loadData() {
    this.isLoading = true;
    
    try {
      let data = await this.dataService.loadData().toPromise();
      
      this.items = data.items;
    }
    finally {
      this.isLoading = false;
    }
    
  }
}
