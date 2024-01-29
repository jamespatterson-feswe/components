import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { Sale } from '../../core/interfaces';
import { BehaviorSubject, Subscription } from 'rxjs';

/**
 * @description Sales banner to dynamically display a new sale every N seconds
 *
 * @class InformationBannerComponent
 * @Input sales: Sales[] array of sales
 */

@Component({
  selector: 'lib-information-banner',
  template: `
    <section class="information-banner">
      {{ this.sales[0].message }}
    </section>
  `,
  styleUrls: ['./information-banner.component.scss'],
})
export class InformationBannerComponent implements AfterViewInit, OnDestroy {
  @Input() sales!: Sale[];

  protected sale: BehaviorSubject<Sale | null> =
    new BehaviorSubject<Sale | null>(null);
  private subscription: Subscription = new Subscription();

  constructor() {
    this.subscription.add(
      this.sale.subscribe({
        next: (sale: Sale | null) => {
          if (sale) {
            setTimeout(() => {
              const tempSales = this.sales.slice(1, this.sales.length);
              tempSales.push(sale);
              this.sales = tempSales;
              this.sale.next(this.sales[0]);
            }, 10000);
          }
        },
      }),
    );
  }

  ngAfterViewInit(): void {
    this.sale.next(this.sales[0]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
