import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-displaymsg',
  templateUrl: './displaymsg.component.html',
  styleUrls: ['./displaymsg.component.css']
})
export class DisplaymsgComponent {
  @Input() entityName: string = 'Home'
}
