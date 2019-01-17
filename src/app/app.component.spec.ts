import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestService } from './test.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    // mock the TestService
    const dummyTestService = jasmine.createSpyObj('TestService', ['hello']);
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      // need to provide the mock here to stop the TestService being called
      providers: [{ provide: TestService, useValue: dummyTestService }],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test-testing-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('test-testing-app');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // this triggers ngOnInit
    // ... which would normally lead to the console log 'hello' message
    // ... but the mock stops that
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to test-testing-app!',
    );
  });
});
