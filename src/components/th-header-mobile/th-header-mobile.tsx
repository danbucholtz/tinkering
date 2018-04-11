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
          <ion-title>Buttons - Basic</ion-title>
          <ion-buttons slot="primary">
            <ion-button slot="icon-only">
              <ion-icon name="more"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
    ];
  }
}

