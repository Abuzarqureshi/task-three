import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SectionDetails } from '../shared/model/data.model';
import { SectionService } from '../shared/service/sec.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  sectionForm : any;
  constructor(private secServe : SectionService){}
  ngOnInit(): void {
    this.sectionForm = new FormGroup({
      secHeader : new FormControl('', Validators.required),
      secDetails : new FormControl('', [Validators.required, Validators.minLength(50)])
    })
  }
  onSubmit(){
    let sec = this.sectionForm.value;
    let sectionObj = new SectionDetails(sec.secHeader,sec.secDetails)
    console.log(sec);
    this.secServe.addNewSection(sectionObj)
    this.sectionForm.reset();
  }

}
