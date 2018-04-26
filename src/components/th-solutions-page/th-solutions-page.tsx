import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-solutions-page',
  styleUrl: 'th-solutions-page.css'
})
export class ThSolutionsPage {

  render() {
    return [
      <div class="grid">
        <th-header></th-header>
        
        <th-solutions-main-content></th-solutions-main-content>

        <th-solutions-architecture-content></th-solutions-architecture-content>

        <th-solutions-training-content></th-solutions-training-content>

        <th-solutions-engineering-content></th-solutions-engineering-content>

        <th-footer></th-footer>
      </div>
    ]
  }
}


