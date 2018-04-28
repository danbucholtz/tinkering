import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-training-page',
  styleUrl: 'th-training-page.css'
})
export class ThTrainingPage {

  render() {
    return [
      <div class="grid">
        <th-header></th-header>
        
        <th-training-main-content></th-training-main-content>

        <th-training-body-content></th-training-body-content>

        <th-training-summary></th-training-summary>

        <th-footer></th-footer>
      </div>
    ]
  }
}


