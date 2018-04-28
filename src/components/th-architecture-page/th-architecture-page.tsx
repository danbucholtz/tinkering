import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-architecture-page',
  styleUrl: 'th-architecture-page.css'
})
export class ThArchitecturePage {

  render() {
    return [
      <div class="grid">
        <th-header></th-header>
        
        <th-architecture-main-content></th-architecture-main-content>

        <th-architecture-body-content></th-architecture-body-content>

        <th-architecture-summary></th-architecture-summary>

        <th-footer></th-footer>
      </div>
    ]
  }
}


