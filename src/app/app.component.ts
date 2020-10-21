import { Component, ViewChild, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

import { YoutubeService } from './services/youtube.service';
import { GridImageComponent } from './components/grid-image/grid-image.component';
import { CustomToolPanelComponent } from './components/custom-tool-panel/custom-tool-panel.component';
import { HeaderSelectorComponent } from './components/header-selector/header-selector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  gridApi;
  gridColumnApi;
  errorMessage: string = '';

  sideBar = {
    toolPanels: [
      {
        id: 'customPanel',
        labelDefault: 'Toolbar',
        labelKey: 'customPanel',
        iconKey: 'custom-panel',
        toolPanel: 'customToolPanelComponent',
      },
    ],
    defaultToolPanel: 'customPanel',
  };

  icons = {
    'custom-panel': '<span class="ag-icon ag-icon-custom-stats"></span>',
  };

  frameworkComponents = {
    gridImageComponent: GridImageComponent,
    customToolPanelComponent: CustomToolPanelComponent,
    headerSelectorComponent: HeaderSelectorComponent,
  };

  columnDefs = [
    {
      field: 'checkbox',
      headerName: '',
      headerComponent: 'headerSelectorComponent',
      checkboxSelection: false,
      width: 50,
      suppressMenu: true,
      headerComponentParams: { showCheckbox: false },
    },
    {
      field: 'thumbnail',
      headerName: '',
      autoHeight: true,
      cellRenderer: 'gridImageComponent',
      width: 100,
    },
    { field: 'publishedAt', headerName: 'Published on' },
    { field: 'title', headerName: 'Video Title' },
    { field: 'description', headerName: 'Description' },
  ];

  rowData: any;

  constructor(private _youtubeService: YoutubeService) {}

  ngOnInit(): void {}

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this._youtubeService.getRowData().subscribe(
      (data) => {
        this.errorMessage = '';
        if (data.items && data.items.length) {
          this.rowData = data.items.map((item) => {
            return {
              thumbnail: item?.snippet?.thumbnails?.default?.url,
              publishedAt: item?.snippet?.publishedAt,
              title: `https://www.youtube.com/watch?v=${item?.id?.videoId}`,
              description: item?.snippet?.description,
            };
          });
        } else {
          this.rowData = [];
        }
      },
      (err) => {
        this.errorMessage = err?.error?.error?.message || err.message;
        console.error(this.errorMessage);
        this.rowData = [];
      }
    );
  }

  getContextMenuItems(params) {
    let result: any = ['copy', 'copyWithHeaders', 'paste'];
    let customMenuItem = {
      name: 'Open in new tab',
      action: () => window.open(params.value),
    };
    if (params.column.colId === 'title') {
      result.push(customMenuItem);
    }
    return result;
  }
}
