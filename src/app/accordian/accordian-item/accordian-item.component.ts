import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordian-item',
  templateUrl: './accordian-item.component.html',
  styleUrls: ['./accordian-item.component.css']
})
export class AccordianItemComponent {
  @Input() sec : any;
}
