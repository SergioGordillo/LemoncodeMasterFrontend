import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public time: Date = new Date();
  public year: number = this.time.getFullYear();

  constructor() { }


}
