import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-culture-page',
  styleUrl: 'th-culture-page.css'
})
export class ThCulturePage {

  render() {
    return [
      <div class="grid">
        <th-header></th-header>
        
        <th-culture-main-content></th-culture-main-content>

        <th-culture-body-content></th-culture-body-content>
        
        <th-footer></th-footer>
      </div>
    ]
  }
}


