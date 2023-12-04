import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapEventsComponent } from './map-events.component';

describe('MapEventsComponent', () => {
  let component: MapEventsComponent;
  let fixture: ComponentFixture<MapEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
