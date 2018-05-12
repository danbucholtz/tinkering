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
    return  (
      <stencil-router>
        <RouterSwitch scrollTopOffset={0}>
          <stencil-route url='/' component='th-landing-page' exact={true} scrollTopOffset={0}></stencil-route>
            
          <stencil-route url='/about' component='th-about-page' scrollTopOffset={0}></stencil-route>
          
          <stencil-route url='/solutions' component='th-solutions-page' scrollTopOffset={0}></stencil-route>
          
          <stencil-route url='/architecture' component='th-architecture-page' scrollTopOffset={0}></stencil-route>
          
          <stencil-route url='/training' component='th-training-page' scrollTopOffset={0}></stencil-route>
          
          <stencil-route url='/engineering' component='th-engineering-page' scrollTopOffset={0}></stencil-route>
          
          <stencil-route url='/culture' component='th-culture-page' scrollTopOffset={0}></stencil-route>

          <stencil-route url='/careers' component='th-careers-page' scrollTopOffset={0}></stencil-route>
        </RouterSwitch>
      </stencil-router>
    )
  }
}
