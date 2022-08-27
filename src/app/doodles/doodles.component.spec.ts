import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoodlesComponent } from './doodles.component';

describe('DoodlesComponent', () => {
  let component: DoodlesComponent;
  let fixture: ComponentFixture<DoodlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoodlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoodlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
