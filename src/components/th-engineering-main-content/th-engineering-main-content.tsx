import { Component } from '@stencil/core';

@Component({
  tag: 'th-engineering-main-content',
  styleUrl: 'th-engineering-main-content.css',
  shadow: true
})
export class ThEngineeringMainContent {
  
  render() {
    return [
      <div class="container">
        <div class="text-container">
          <h1>Top Notch Engineers</h1>
          <h2>Our staff of exclusively senior engineers are all hand-chosen for their Ionic contributions and experiences. We have the highest concentration of Ionic talent on our staff, and it shows.</h2>
          <a href="/contact"><ion-button>Work with Us</ion-button></a>
        </div>
      </div>
    ];
  }
}