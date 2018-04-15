import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-site',
  styleUrl: 'th-site.css'
})
export class ThSite {

  render() {
    /*return (
      <div class="grid">
        <th-header></th-header>

        /*

        <div class="services-container">
          
          <th-training-process></th-training-process>
          <th-engineering-process></th-engineering-process>
        </div>
        
        <footer>
          Footer
        </footer>
      </div>
    );
    */

    return  (
      <div class="grid">
        <th-header></th-header>
        
        <th-main-content></th-main-content>

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

/*
<!--<th-architecture-process></th-architecture-process>

        

        
        */