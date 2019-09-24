import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);

        if (count === 2) {
          observer.complete('Completed!');
        }

        if (count > 3) {
          observer.error(new Error('Greater 3!'));
        }

        count++;
      }, 1000);
    });

    this.firstSubscription = customIntervalObservable.pipe(filter(data => {
      return data > 0;
    }), map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
      console.log(data);
    },
    error => {
      console.log(error);
    },
    () => {
      console.log('Completed!');
    });

  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }
}
