import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCertifComponent } from './edit-certif.component';

describe('EditCertifComponent', () => {
  let component: EditCertifComponent;
  let fixture: ComponentFixture<EditCertifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCertifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
