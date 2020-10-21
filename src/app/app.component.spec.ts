import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        AgGridModule.withComponents([]),
      ],
      declarations: [AppComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('grid API is not available until  `detectChanges`', () => {
    expect(component.gridApi).not.toBeTruthy();
  });

  it('checkbox column should be initially false', () => {
    expect(component.columnDefs[0].checkboxSelection).not.toBeTruthy();
  });

  it('the grid headers should be as expected', () => {
    const appElement = fixture.nativeElement;

    const cellElements = appElement.querySelectorAll('.ag-header-cell-text');
    expect(cellElements.length).toEqual(4);
    expect(cellElements[0].textContent).toEqual('');
    expect(cellElements[1].textContent).toEqual('Published on');
    expect(cellElements[2].textContent).toEqual('Video Title');
    expect(cellElements[3].textContent).toEqual('Description');
  });
});
