import '@ionic/core';
import '@stencil/router';

import { Component } from '@stencil/core';

@Component({
  tag: 'th-site',
  styleUrl: 'th-site.css'
})
export class ThSite {

  render() {
    return  (
      <stencil-router>
        <stencil-route url='/' component='th-landing-page' exact={true}></stencil-route>
        <stencil-route url='/about' component='th-about-page'></stencil-route>
        <stencil-route url='/solutions' component='th-solutions-page'></stencil-route>
      </stencil-router>
    )
  }
}
