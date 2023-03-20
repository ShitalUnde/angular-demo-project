import { AfterViewInit, ChangeDetectorRef, Component, OnInit,  } from '@angular/core';
import { MediaChange, MediaObserver, ScreenTypes } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private mediaObserver: MediaObserver, private changeDetectorRef: ChangeDetectorRef){

  }
  ngOnInit(): void {  }

  ngAfterViewInit(): void { }
}
