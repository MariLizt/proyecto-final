import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToTopPantalones(): void {
    this.viewportScroller.scrollToPosition([0, 1200]);
  }
  scrollToTopChaquetas(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
  scrollToTopZapatos(): void {
    this.viewportScroller.scrollToPosition([0, 1800]);
  }
}
