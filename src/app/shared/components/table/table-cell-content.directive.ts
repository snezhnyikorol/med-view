import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTableCellContent]'
})
export class TableCellContentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
