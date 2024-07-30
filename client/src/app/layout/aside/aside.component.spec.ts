import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { AsideComponent } from './aside.component';
import {  provideRouter, RouterLink } from '@angular/router';
import { By } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
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

  // it('should navigate to ListChecklistComponent when clicking on button', fakeAsync(async()=> {
    // const harness = await RouterTestingHarness.create('checklists');
    // const link = fixture.debugElement.query(By.css('.checklists-button'))
    // console.log(link.nativeElement.getAttribute('routerLink'))
  //   const link = fixture.debugElement.query(By.css('.checklists-button'));
  //   const routerLinkValue = link.componentInstance.routerLink;
  //   console.log(routerLinkValue);
  // }))
});
