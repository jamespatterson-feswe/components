import { NgModule } from '@angular/core';

import { LinkComponent } from './link.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LinkComponent],
  imports: [CommonModule],
  exports: [LinkComponent],
})
export class LinkModule {}
