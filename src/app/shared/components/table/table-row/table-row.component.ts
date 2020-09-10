import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.scss']
})
export class TableRowComponent implements OnInit {
  @Input() id;
  @Input() hasCheckbox = true;
  @Input() rowData;
  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.rowData.count++;
  }

  subtractItem() {
    if (this.rowData.count > 0) {
      this.rowData.count--;
    }
  }

}
