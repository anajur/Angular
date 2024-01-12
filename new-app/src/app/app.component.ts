import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showWarning: boolean = false;
  showSuccess: boolean = false;
  
  public openWarning(){
    this.showWarning = true;
  }

  public openSuccess(){
    this.showSuccess = true;
  }
}
