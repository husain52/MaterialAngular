import { Component, OnInit } from '@angular/core';
import {FormArray, FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {

  user:FormGroup;
  toggle;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
   }

  


  /*
  initializeForm(){
    this.user = new FormGroup({
      name:new FormGroup({
        firstName : new FormControl('',Validators.required),
        lastName : new FormControl('')
      }),
      age:new FormControl('',null),
      email: new FormControl(''),
      addresses: new FormArray([
        this.initAddress(), 
      ]),
      gender:new FormControl(''),
      role:new FormControl(''),
      theme:new FormControl(''),
      topics:new FormControl(''),
      isActive:new FormControl(false),
      discount: new FormControl(''),
      toggle:new FormControl('')
    });

      this.user.patchValue({name :{firstName:"Husain",lastName:"Rampurawala"}}); // adding default values to the form

      //let val = this.user.get('addresses') as FormArray; form control of for array
      //console.log(val.at(1));
      //this.user.get('name').valueChanges.subscribe(data => console.log(this.user.get('age'))); // or
      //this.user.get('name').valueChanges.subscribe(data => console.log(data)); 
  }

  
  initQualifications(){
    return new FormGroup({
      qualification : new FormControl('')
    });
  }
  initAddress(){
    return new FormGroup({
      street : new FormControl(''),
      postcode : new FormControl('')
    });
  }
  addAddress(){
    const control = <FormArray>this.user.controls['addresses'];
    control.push(this.initAddress());
  }
  removeAddress(i: number){
    const control = <FormArray>this.user.controls['addresses'];
    control.removeAt(i);
  }
  public roles = [
    {value :'admin',display : 'Administrator'},
    {value :'guest',display : 'Guest'},
    {value :'custom',display : 'Custom'}
  ];
  public genders = [
    {value:'F',display:'Female'},
    {value:'M',display:'Male'},
  ];
  public topics = [
    {value :'game',display:'Gaming'},
    {value :'tech',display:'Technology'},
    {value :'life',display:'Lifestyle'}
  ];
  public toggles = [
    {value : 'toggled',display:'Toggled'},
    {value : 'untoggled',display:'UnToggled'},
  ]
  onSubmit(user){
    console.log(user);
    if(this.user.get('toggle').value){
      this.user.controls['toggle'].setValue('toggled');
    }else{
      console.log("here");
      this.user.controls['toggle'].setValue('untoggled');
    }
  }
  getAddresses(form){
    return form.get('addresses').controls;
  }
  getUserControl(form){
    return form.get('name').controls;
  }
  getQualifications(form){
    return form.get('qualifications').controls;
  }
  getInstitutions(form){
    return form.get('qualifications').controls[0].get('institution').controls;
  } */

}
