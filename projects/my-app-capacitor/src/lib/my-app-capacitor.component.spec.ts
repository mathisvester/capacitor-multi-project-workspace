import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppCapacitorComponent } from './my-app-capacitor.component';

describe('MyAppCapacitorComponent', () => {
  let component: MyAppCapacitorComponent;
  let fixture: ComponentFixture<MyAppCapacitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyAppCapacitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAppCapacitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
