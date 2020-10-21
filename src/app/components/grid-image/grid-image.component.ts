import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-image',
  templateUrl: './grid-image.component.html',
  styleUrls: ['./grid-image.component.scss'],
})
export class GridImageComponent {
  params: any = {};
  agInit(params: any) {
    this.params = params;
  }
}
