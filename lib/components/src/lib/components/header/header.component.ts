import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-header',
  template: `
    <section class="header">
      <p>{{ company }}</p>
      <div *ngIf="links?.length">
        <a class="link" *ngFor="let link of links" href="/{{ link }}">{{ link }} </a>
      </div>
    </section>
  `,
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input({ required: true }) company!: string;
  @Input({ required: true }) links!: string[];
}
