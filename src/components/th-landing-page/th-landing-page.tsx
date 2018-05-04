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
        
        <th-landing-main-content></th-landing-main-content>

        <th-landing-what-we-do></th-landing-what-we-do>

        <th-landing-architecture-process></th-landing-architecture-process>
        <th-landing-training-process></th-landing-training-process>
        <th-landing-engineering-process></th-landing-engineering-process>

        <th-landing-good-hands></th-landing-good-hands>

        <th-landing-team></th-landing-team>
        
        <th-footer></th-footer>
      </div>
    )
  }
}
