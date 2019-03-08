import { Component, OnInit } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import * as moment from 'moment';

//<<----- For Date Change Format ------>>
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MM YYYY',
  },
};  
//<---------------------------------------

@Component({
  selector: 'app-add-rma',
  templateUrl: './add-rma.component.html',
  styleUrls: ['./add-rma.component.scss'],
  providers: [ {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]}, 
               {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}] 
})
export class AddRMAComponent implements OnInit {
 
  createRMA: FormGroup;
  DeviceProb: FormGroup;

  constructor() { }

  ngOnInit() {   

    this.createRMA = new FormGroup({
      Particular: new FormControl(null,[Validators.required]),
      Gatepass: new FormControl(null,[Validators.required]),
      GatepassDate : new FormControl(null,[Validators.required]),
      DeviceProblem: new FormArray([],[Validators.required])
    })

    this.DeviceProb = new FormGroup({
      Device : new FormControl(),
      Problem : new FormControl(),
      SerialNo : new FormControl(),
      RMANo : new FormControl(),
      DCNo : new FormControl(),
      SendToServiceCenterDate : new FormControl(),
      ReceivedFromServiceCenterDate : new FormControl(),
      ReturnedToPartyDate : new FormControl()
     })  
  }



  add(){
    const data = (<FormArray>(
      this.createRMA.get('DeviceProblem') 
    )) as FormArray;
    data.push(new FormControl(this.DeviceProb.value)); 
    this.DeviceProb.reset();
 }

 saveRMA(){
   console.log("=== Data ==="+JSON.stringify(this.createRMA.value));
 }

  
}
