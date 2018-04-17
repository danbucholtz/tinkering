import { Component } from '@stencil/core';

@Component({
  tag: 'th-header-mobile',
  styleUrl: 'th-header-mobile.css',
  shadow: true
})
export class ThHeaderMobile {

  
  render() {
    return [
      <ion-header>
        <ion-toolbar>
          <ion-title>Theracode</ion-title>
          <ion-buttons slot="primary">
            <ion-menu-toggle>
              <ion-button>Menu</ion-button>
            </ion-menu-toggle>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    ];
  }
}

