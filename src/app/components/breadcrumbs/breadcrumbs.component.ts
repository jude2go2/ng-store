import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IBreadcrumb } from '../../models';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit, OnDestroy {
  constructor(private router: Router) {}

  public breadcrumbs: Array<IBreadcrumb> = [];
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.router.events.subscribe((data) => {
        
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
