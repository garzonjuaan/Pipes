import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'juan david';
  public nameUpper: string = 'juan david';
  public fullName: string = 'JUan dAvId';

  public customDate: Date = new Date()
}
