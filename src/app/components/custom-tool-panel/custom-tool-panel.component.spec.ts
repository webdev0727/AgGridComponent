import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomToolPanelComponent } from './custom-tool-panel.component';

describe('CustomToolPanelComponent', () => {
  let component: CustomToolPanelComponent;
  let fixture: ComponentFixture<CustomToolPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomToolPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomToolPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
