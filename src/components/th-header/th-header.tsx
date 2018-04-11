import { Component } from '@stencil/core';

@Component({
  tag: 'th-header',
  styleUrl: 'th-header.css',
  shadow: true
})
export class ThHeader {
  
  render() {
    return [
      <ion-show-when size="sm">
        <th-header-desktop></th-header-desktop>
      </ion-show-when>,
      <ion-hide-when size="sm">
        <th-header-mobile></th-header-mobile>
      </ion-hide-when>
    ];
  }
}

