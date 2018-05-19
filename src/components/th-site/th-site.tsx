import '@ionic/core';
import 'ionicons';
import '@stencil/router';

import { Component } from '@stencil/core';
import { RouterSwitch } from '@stencil/router';

@Component({
  tag: 'th-site',
  styleUrl: 'th-site.css'
})
export class ThSite {

  render() {
    return  [
      <th-menu></th-menu>,
      <stencil-router>
        <RouterSwitch scrollTopOffset={0}>
          <stencil-route url='/' component='th-landing-page' exact={true}></stencil-route>
            
          <stencil-route url='/about' component='th-about-page'></stencil-route>
          
          <stencil-route url='/solutions' component='th-solutions-page'></stencil-route>
          
          <stencil-route url='/architecture' component='th-architecture-page'></stencil-route>
          
          <stencil-route url='/training' component='th-training-page'></stencil-route>
          
          <stencil-route url='/engineering' component='th-engineering-page' ></stencil-route>
          
          <stencil-route url='/culture' component='th-culture-page'></stencil-route>

          <stencil-route url='/careers' component='th-careers-page'></stencil-route>

          <stencil-route url='/contact' component='th-contact-page'></stencil-route>
        </RouterSwitch>
      </stencil-router>
    ]
  }
}
