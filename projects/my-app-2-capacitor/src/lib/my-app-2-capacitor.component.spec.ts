import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApp2CapacitorComponent } from './my-app-2-capacitor.component';

describe('MyApp2CapacitorComponent', () => {
  let component: MyApp2CapacitorComponent;
  let fixture: ComponentFixture<MyApp2CapacitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyApp2CapacitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyApp2CapacitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
