import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from './Common/ang-material.module';
import { CommonApp } from './Common/common-app.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, CommonApp, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
