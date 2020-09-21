import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {TableCellContentDirective} from '@shared/components/table/table-cell-content.directive';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-table-cell]',
  templateUrl: './table-cell.component.html',
  styleUrls: ['./table-cell.component.scss']
})
export class TableCellComponent implements OnInit {
  @Input() cellData;
  @ViewChild(TableCellContentDirective, {static: true}) appTableCellContent: TableCellContentDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    if (this.cellData.component) {
      this.loadComponent(this.cellData.component);
    }
  }

  loadComponent(component) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const viewContainerRef = this.appTableCellContent.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent<Component>(componentFactory);
    // componentRef.instance.data = adItem.data;
  }

}
