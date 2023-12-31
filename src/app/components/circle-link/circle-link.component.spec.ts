/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleLinkComponent } from './circle-link.component';

describe('CircleLinkComponent', () => {
  let component: CircleLinkComponent;
  let fixture: ComponentFixture<CircleLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CircleLinkComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
