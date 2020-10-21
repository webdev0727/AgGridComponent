import { Component, OnInit } from '@angular/core';
import { IToolPanelParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-tool-panel',
  templateUrl: './custom-tool-panel.component.html',
  styleUrls: ['./custom-tool-panel.component.scss'],
})
export class CustomToolPanelComponent implements OnInit {
  private params: IToolPanelParams;
  totalRecords: number;
  selectedRecords: number;
  constructor() {}

  ngOnInit(): void {}

  agInit(params: IToolPanelParams): void {
    this.params = params;

    this.totalRecords = 0;
    this.selectedRecords = 0;

    this.params.api.addEventListener(
      'selectionChanged',
      this.updateTotals.bind(this)
    );

    this.params.api.addEventListener(
      'modelUpdated',
      this.updateTotals.bind(this)
    );
  }

  updateTotals(): void {
    this.totalRecords = this.params.api.getDisplayedRowCount();
    this.selectedRecords = this.params.api.getSelectedNodes().length;
  }

  handleSelectionChange(e) {
    let checkboxCol = this.params.api.getColumnDef('checkbox');
    if (e.target.checked) {
      checkboxCol.checkboxSelection = true;
      checkboxCol.headerComponentParams.showCheckbox = true;
    } else {
      checkboxCol.checkboxSelection = false;
      checkboxCol.headerComponentParams.showCheckbox = false;
    }
    this.params.api.refreshHeader();
    this.params.api.redrawRows();
  }
}
