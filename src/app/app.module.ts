import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import 'ag-grid-enterprise';

import { GridImageComponent } from './components/grid-image/grid-image.component';
import { CustomToolPanelComponent } from './components/custom-tool-panel/custom-tool-panel.component';
import { HeaderSelectorComponent } from './components/header-selector/header-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    GridImageComponent,
    CustomToolPanelComponent,
    HeaderSelectorComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([
      GridImageComponent,
      CustomToolPanelComponent,
      HeaderSelectorComponent,
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
