import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-footer',
  template: `
    <section class="footer">
      {{ licensing }}
    </section>
  `,
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input({ required: true }) licensing!: string;
}
