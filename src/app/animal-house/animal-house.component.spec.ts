import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalHouseComponent } from './animal-house.component';

describe('AnimalHouseComponent', () => {
  let component: AnimalHouseComponent;
  let fixture: ComponentFixture<AnimalHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
