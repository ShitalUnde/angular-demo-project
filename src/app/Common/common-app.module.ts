import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { DateFormatterPipe } from "./date-formatter.pipe";
import { DisplaymsgComponent } from "./displaymsg/displaymsg.component";
import { MaterialModule } from "./ang-material.module";


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  declarations: [
    DateFormatterPipe,
    DisplaymsgComponent
  ],
  exports: [
    FlexLayoutModule,
    ReactiveFormsModule,
    DateFormatterPipe,
    MaterialModule,
    DisplaymsgComponent

  ],

  providers: [

 ]
})
export class CommonApp {}
