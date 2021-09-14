import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInterComponent } from './comp-inter.component';

describe('CompInterComponent', () => {
  let component: CompInterComponent;
  let fixture: ComponentFixture<CompInterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompInterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompInterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
