import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-landing-page',
  styleUrl: 'th-landing-page.css'
})
export class ThLandingPage {

  render() {
    return  (
      <div class="grid">
        <th-header></th-header>
        
        <th-main-content></th-main-content>

        <th-what-we-do></th-what-we-do>

        <th-architecture-process></th-architecture-process>
        <th-training-process></th-training-process>
        <th-engineering-process></th-engineering-process>

        <th-good-hands></th-good-hands>

        <th-landing-team></th-landing-team>
        
        <th-footer></th-footer>
      </div>
    )
  }
}
