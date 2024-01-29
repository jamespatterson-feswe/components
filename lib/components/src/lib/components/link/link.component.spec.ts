import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LinkComponent } from './link.component';

describe('LinkComponent', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LinkComponent],
    }),
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LinkComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
