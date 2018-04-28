import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-engineering-page',
  styleUrl: 'th-engineering-page.css'
})
export class ThEngineeringPage {

  render() {
    return [
      <div class="grid">
        <th-header></th-header>
        
        <th-engineering-main-content></th-engineering-main-content>

        <th-engineering-body-content></th-engineering-body-content>

        <th-engineering-summary></th-engineering-summary>

        <th-footer></th-footer>
      </div>
    ]
  }
}


