import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {
  constructor(private viewportScroller: ViewportScroller) {}

    scrollToTopChaquetas(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  scrollToTopBlusas(): void {
    this.viewportScroller.scrollToPosition([0, 1300]);
  }

  scrollToTopVestidos(): void {
    this.viewportScroller.scrollToPosition([0, 3000]);
  }

  scrollToTopPantalones(): void {
    this.viewportScroller.scrollToPosition([0, 4000]);
  }

  scrollToTopZapatos(): void {
    this.viewportScroller.scrollToPosition([0, 1890]);
  }

  scrollToTopComplementos(): void {
    this.viewportScroller.scrollToPosition([0, 4290]);
  }

  scrollToTopPantalonesH(): void {
    this.viewportScroller.scrollToPosition([0, 800]);
  }

  scrollToTopZapatosH(): void {
    this.viewportScroller.scrollToPosition([0, 1400]);
  }
}
