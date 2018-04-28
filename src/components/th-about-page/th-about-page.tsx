import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-about-page',
  styleUrl: 'th-about-page.css'
})
export class ThAboutPage {

  render() {
    return [
      <div class="grid">
        <th-header></th-header>
        
        <th-about-main-content></th-about-main-content>

        <th-about-body-content></th-about-body-content>

        <th-about-mission></th-about-mission>
        
        <th-footer></th-footer>
      </div>
    ]
  }
}

