import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinxDmsPrototypeProjectComponent } from './linx-dms-prototype-project.component';

describe('LinxDmsPrototypeProjectComponent', () => {
  let component: LinxDmsPrototypeProjectComponent;
  let fixture: ComponentFixture<LinxDmsPrototypeProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinxDmsPrototypeProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinxDmsPrototypeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
