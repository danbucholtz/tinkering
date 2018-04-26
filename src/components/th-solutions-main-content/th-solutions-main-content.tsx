import { Component } from '@stencil/core';

@Component({
  tag: 'th-solutions-main-content',
  styleUrl: 'th-solutions-main-content.css',
  shadow: true
})
export class ThSolutionsMainContent {
  
  render() {
    return [
      <div class="container">
        <div class="text-container">
          <h1>Our Services</h1>
          <h2>Theracode makes money by selling Ionic professional services to medium to large companies. Each engagement typically consists of three phases: Architectural oversight and consulting, staff training and workshops, and engineering staff augmentation.</h2>
          <a href="/contact"><ion-button>Learn More</ion-button></a>
        </div>
      </div>
    ];
  }
}

