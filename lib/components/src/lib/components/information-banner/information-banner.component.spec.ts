import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { InformationBannerComponent } from './information-banner.component';

describe('InformationBannerComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [InformationBannerComponent],
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(InformationBannerComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
