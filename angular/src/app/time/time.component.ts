import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { timestamp, map } from 'rxjs/operators';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
})
export class TimeComponent implements OnInit {
  public time: number;

  constructor() {}

  ngOnInit() {
    Observable.interval(1000)
      .pipe(timestamp(), map(ts => ts.timestamp))
      .subscribe(v => {
        this.time = v;
      });
  }
}
