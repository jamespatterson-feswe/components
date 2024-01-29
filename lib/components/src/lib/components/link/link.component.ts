import { Component, Input } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'cmp-link',
  template: `
    <a
      aria-label="To redirect to " + {{ path }}
      role="link"
      href="{{ path }}">
      {{ linkText }}
    </a>
  `,
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @Input({ required: true }) linkText!: string;
  @Input({ required: true }) path!: string;
}
