import { Component, inject, Input, TemplateRef } from '@angular/core';
import { WidgetActionsService } from '../services/widget-actions.service';
import { WidgetStateService } from '../services/widget-state.service';

@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html',
  styleUrls: ['./template-outlet.component.css'],
  providers:[WidgetStateService,WidgetActionsService],
  preserveWhitespaces: true
})
export class TemplateOutletComponent {
  @Input() headerTemplate : TemplateRef<any> | undefined
  @Input() contentTemplate : TemplateRef<any> | undefined
  @Input() actionTemplate : TemplateRef<any> | undefined

  state = inject(WidgetStateService)
  actions = inject(WidgetActionsService)

  isTrue: boolean = true
}
