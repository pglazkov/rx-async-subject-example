import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SharedData } from '../shared-data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  isLoading = false;

  constructor(public sharedData: SharedData) { }

  async loadData() {
    this.isLoading = true;
    
    try {
      let data = await this.loadDataFromHttpService().toPromise();      

      this.sharedData.init(data);
    }
    finally {
      this.isLoading = false;
    }    
  }

  private loadDataFromHttpService() {
    // Simulate loading data from HTTP service
    return Observable.of({ items: ['a', 'b', 'c']}).delay(2000);
  }
}
