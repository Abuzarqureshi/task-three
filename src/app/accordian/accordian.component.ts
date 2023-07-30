import { Component, OnInit } from '@angular/core';
import { SectionDetails } from '../shared/model/data.model';
import { SectionService } from '../shared/service/sec.service';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit{
  secData : SectionDetails[] = [];
  constructor(private secServe : SectionService){}
  ngOnInit(): void {
    this.secServe.sectionSub.subscribe((param : any)=>{
      this.secData = param;
      console.log(this.secData)
    })
  }
}
