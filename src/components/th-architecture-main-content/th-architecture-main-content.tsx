import { Component } from '@stencil/core';

@Component({
  tag: 'th-architecture-main-content',
  styleUrl: 'th-architecture-main-content.css',
  shadow: true
})
export class ThArchitectureMainContent {
  
  render() {
    return [
      <div class="container">
        <div class="text-container">
          <h1>Exceptional Architects</h1>
          <h2>Each member of our team is an accomplished software architect with extensive experience working with or for fortune 500 companies. We're both great with technology and navigating organizational dynamics.</h2>
          <a href="/contact"><ion-button>Get in Touch</ion-button></a>
        </div>
      </div>
    ];
  }
}