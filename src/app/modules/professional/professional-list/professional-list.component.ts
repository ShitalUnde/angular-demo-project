import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CountryCode, DateFormat, Professional, User } from 'src/app/model/entity';
import { ProfessionalUserCreateFormComponent } from '../professional-user-create-form/professional-user-create-form.component';

@Component({
  selector: 'app-professional-list',
  templateUrl: './professional-list.component.html',
  styleUrls: ['./professional-list.component.css']
})
export class ProfessionalListComponent implements OnInit{
  professionalObj: Professional = new Professional()
  userObj : User = new User()
  dateFormat = DateFormat
  constructor(public dialogRef: MatDialog) {}
  ngOnInit(): void { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
   const dialog =  this.dialogRef.open(ProfessionalUserCreateFormComponent, {
      width: '600px',
      maxHeight:'400px',
      disableClose: true,
      data: { data: this.professionalObj },
    });

    dialog.afterClosed().subscribe(res => {
      this.professionalObj = {...res}
      this.professionalObj.countryCode = CountryCode.India
    })
  }
}
