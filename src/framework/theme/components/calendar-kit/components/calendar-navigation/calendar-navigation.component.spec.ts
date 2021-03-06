/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NbCalendarNavigationComponent } from './calendar-navigation.component';
import { NbCalendarDatePipe } from '../calendar-date/calendar-date.pipe';
import { NbLocaleService } from '../../services';


describe('Component: NbCalendarNavigation', () => {
  let fixture: ComponentFixture<NbCalendarNavigationComponent>;
  let component: NbCalendarNavigationComponent;
  let componentEl: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NbCalendarDatePipe, NbCalendarNavigationComponent],
      providers: [NbLocaleService],
    });
    fixture = TestBed.createComponent(NbCalendarNavigationComponent);
    component = fixture.componentInstance;
    componentEl = fixture.debugElement.nativeElement;
  });

  it('should render date', () => {
    component.date = new Date(2018, 6, 23);
    fixture.detectChanges();
    expect(componentEl.querySelector('button').textContent).toContain('Jul 2018');
  });

  it('should render empty button with when null date', () => {
    fixture.detectChanges();
    expect(componentEl.querySelector('button').textContent).toContain('');
  });

  it('should fire click when interior button clicked', () => {
    component.changeMode.subscribe(e => expect(e).toBeUndefined());
    componentEl.querySelector('button').dispatchEvent(new Event('click'));
  });
});
