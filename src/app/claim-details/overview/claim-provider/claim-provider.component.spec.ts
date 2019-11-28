import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimProviderComponent } from './claim-provider.component';

describe('ClaimProviderComponent', () => {
  let component: ClaimProviderComponent;
  let fixture: ComponentFixture<ClaimProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
