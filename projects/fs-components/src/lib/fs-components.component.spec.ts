import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FsComponentsComponent } from './fs-components.component';

describe('FsComponentsComponent', () => {
  let component: FsComponentsComponent;
  let fixture: ComponentFixture<FsComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FsComponentsComponent],
    });
    fixture = TestBed.createComponent(FsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
