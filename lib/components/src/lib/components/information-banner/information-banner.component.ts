import { Component } from '@angular/core';

@Component({
  selector: 'lib-information-banner',
  templateUrl: './information-banner.component.html',
  styleUrls: ['./information-banner.component.scss']
})
export class InformationBannerComponent {
  protected title: string;

  constructor() {
    this.title = 'Lib Component';
  }
}
