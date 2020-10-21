import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-selector',
  templateUrl: './header-selector.component.html',
  styleUrls: ['./header-selector.component.scss'],
})
export class HeaderSelectorComponent implements OnInit {
  params: any;
  showCheckbox: boolean;
  selectAll: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  agInit(params): void {
    this.params = params;
    this.showCheckbox = params.showCheckbox;

    params.api.addEventListener(
      'selectionChanged',
      this.handleSelectionChange.bind(this)
    );
    this.handleSelectionChange();
  }

  handleSelectAllChange(e) {
    if (e.target.checked) {
      this.params.api.selectAll();
    } else {
      this.params.api.deselectAll();
    }
  }

  handleSelectionChange() {
    let totalRecords = this.params.api.getDisplayedRowCount();
    let selectedRecords = this.params.api.getSelectedNodes().length;

    if (totalRecords === selectedRecords) {
      this.selectAll = true;
    } else {
      this.selectAll = false;
    }
  }
}
