import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CountryCode } from 'src/app/model/entity';

@Component({
  selector: 'app-professional-user-create-form',
  templateUrl: './professional-user-create-form.component.html',
  styleUrls: ['./professional-user-create-form.component.css']
})
export class ProfessionalUserCreateFormComponent implements OnInit{
  myForm: FormGroup;
  Genders = ['Male', 'Female']
  toDay = new Date()
  countryCode = CountryCode
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ProfessionalUserCreateFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any){
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      domain: ['', [Validators.required]],
       gender: ['', [Validators.required]],
       dob: ['', [Validators.required]],
       phone:['',[ Validators.required,  Validators.pattern("^[0-9]{10}$")]],
       location:['', [ Validators.required]]
    })
  }

  ngOnInit(): void {
    this.updateProfile();
  }

  submitForm(){
    if(this.myForm.valid){
      this.closeForm()
    }
  }

  closeForm(){
    this.dialogRef.close(this.myForm.value);
  }

  updateProfile() {
    this.myForm.patchValue(this.data.data)
  }

  date(event: any){
  }

  saveForm(){
    if(this.myForm.valid){
      this.dialogRef.close(this.myForm.value);
    }
  }
}
