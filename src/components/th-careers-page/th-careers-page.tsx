import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-careers-page',
  styleUrl: 'th-careers-page.css'
})
export class ThCareersPage {

  render() {
    return [
      <div class="grid">
        <th-header></th-header>
        
        <th-careers-main-content></th-careers-main-content>

        <th-careers-body-content></th-careers-body-content>

        <th-careers-benefits-summary></th-careers-benefits-summary>

        <th-careers-open-positions></th-careers-open-positions>

        <th-footer></th-footer>
      </div>
    ]
  }
}


