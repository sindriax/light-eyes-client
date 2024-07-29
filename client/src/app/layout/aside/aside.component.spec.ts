import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { AsideComponent } from './aside.component';
import { ActivatedRoute, provideRouter, Router, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterModule, RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatNavList } from '@angular/material/list';
import { AuthService } from 'app/core/services/auth.service';
import { ListChecklistComponent } from 'app/checklist/views/list-checklist/list-checklist.component';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
// import { RouterTestingModule } from '@angular/router/testing';



describe('AsideComponent', () => {
  let fixture: ComponentFixture<AsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        AsideComponent, RouterLink
      ],
      providers: [
        provideRouter([{ path: 'checklists', component: ListChecklistComponent }]),
        provideHttpClient(), provideHttpClientTesting()
      ]
  }).compileComponents();
  fixture = TestBed.createComponent(AsideComponent);
  fixture.detectChanges();
  });


  it('should create', () => {
    expect(AsideComponent).toBeTruthy();
  });

  it('should navigate through /checklists route to find a button with the class .create-button', fakeAsync(async()=> {
    const harness = await RouterTestingHarness.create('checklists');
    const button = HTMLButtonElement = harness.fixture.debugElement.query(By.css('.create-button')).nativeElement;
    expect(button).toBeTruthy();
    }));

  it('should navigate to ListChecklistComponent when clicking on button', fakeAsync(async()=> {
    // const harness = await RouterTestingHarness.create('checklists');
    // const link = fixture.debugElement.query(By.css('.checklists-button'))
    // console.log(link.nativeElement.getAttribute('routerLink'))
    const link = fixture.debugElement.query(By.css('.checklists-button'));
    const routerLinkValue = link.componentInstance.routerLink;
    console.log(routerLinkValue);
  }))
});

    // WORKS
//   it('should navigate', fakeAsync(async()=> {
//     const harness = await RouterTestingHarness.create('checklists');
//     const link = fixture.debugElement.query(By.css('.dashboard-button'))
// console.log(link.nativeElement.getAttribute('routerLink'))


  // it('should navigate to /checklists when the Checklists button is clicked', waitForAsync(async () => {
    
  //   const harness = await RouterTestingHarness.create();
  //   const button = HTMLButtonElement = harness.fixture.debugElement.query(By.css('.create-button')).nativeElement;
  //   expect(button).toBeTruthy();

  //   await harness.navigateByUrl('checklists');
  //   expect(button).toBeTruthy();
  // }));


  //   let href = fixture.debugElement.query(By.css('.checklists-button')).nativeElement
  //   .getAttribute('href');
  // expect(href).toEqual('/checklists');




    // WORKS
//   it('should navigate', fakeAsync(async()=> {
//     const harness = await RouterTestingHarness.create('checklists');
//     const link = fixture.debugElement.query(By.css('.dashboard-button'))
// console.log(link.nativeElement.getAttribute('routerLink'))
// ___________________

// comprobar como se saca atribute con binding de routerlink es decir con "[]"

//     const href = debugEl.query(By.css('a')).nativeElement.getAttribute('href');
// expect(expect(href)).toEqual('/login');

    // link.nativeElement.click();
    // fixture.detectChanges();
    // await harness.navigateByUrl('checklists');

    // expect(harness.location.path()).toBe('/checklists');
// describe('AsideComponent', () => {
//   it('should navigate to /checklists when the Checklists button is clicked', waitForAsync(async () => {
//     let navigateSpy: jest.SpyInstance;
//     let authServiceMock = {}
//     let activatedRouteMock = {}
//     let router: Router;

//     TestBed.configureTestingModule({
//       imports:[
//         AsideComponent,RouterLink, RouterLinkActive, MatButtonModule, MatSidenavModule, MatNavList, RouterOutlet, MatIcon
//       ],
//       providers: [
//         provideRouter([{ path: 'checklists', component: ListChecklistComponent }]),
//         { provide: AuthService, useValue: authServiceMock },
//         // { provide: Router, useValue: routerMock },
//         { provide: ActivatedRoute, useValue: activatedRouteMock }
//       ],
//     }).compileComponents();

//     const fixture = TestBed.createComponent(AsideComponent);
//     // fixture.detectChanges();

//     const harness = await RouterTestingHarness.create();
//     const button = fixture.debugElement.query(By.css('button'))?.nativeElement;
//     expect(button).toBeTruthy();

//     await harness.navigateByUrl('checklists');
//     expect(button).toBeTruthy();
//   }));
// });

// describe('AsideComponent', () => {
//   let component: AsideComponent;
//   let fixture: ComponentFixture<AsideComponent>;
//   let router: Router;
//   let navigateSpy: jest.SpyInstance;
//   let authServiceMock = {}
//   let activatedRouteMock = {}

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         AsideComponent,
//         RouterLink, RouterLinkActive, MatButtonModule, MatSidenavModule, MatNavList, RouterOutlet, MatIcon
//       ],
//       providers: [
//         { provide: AuthService, useValue: authServiceMock },
//         { provide: ActivatedRoute, useValue: activatedRouteMock }

//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(AsideComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     router = TestBed.inject(Router);
//     navigateSpy = jest.spyOn(router, 'navigate');
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should navigate to /checklists when the Checklists button is clicked', () => {
//     const button = fixture.debugElement.query(By.css('.checklists-button')).nativeElement;
//     button.click();
//     expect(navigateSpy).toHaveBeenCalledWith(['/checklists']);
//   });

// });

