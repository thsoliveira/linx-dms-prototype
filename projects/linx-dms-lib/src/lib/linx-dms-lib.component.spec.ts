import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinxDmsLibComponent } from './linx-dms-lib.component';

describe('LinxDmsLibComponent', () => {
  let component: LinxDmsLibComponent;
  let fixture: ComponentFixture<LinxDmsLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinxDmsLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinxDmsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
