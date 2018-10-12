import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval } from 'rxjs';
import { timestamp, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit, OnDestroy {
  public time: number;

  public sub: any;

  constructor() {}

  ngOnInit() {
    this.sub = interval(1000)
      .pipe(
        timestamp(),
        map(ts => ts.timestamp),
      )
      .subscribe(v => {
        this.time = v;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
