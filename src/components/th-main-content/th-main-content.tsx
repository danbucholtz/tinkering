import { Component } from '@stencil/core';

@Component({
  tag: 'th-main-content',
  styleUrl: 'th-main-content.css',
  shadow: true
})
export class ThMainContent {
  
  render() {
    return [
      <div class="container">
        <div class="text-container">
          <h1>Theranos helps enterprise teams build better with Ionic</h1>
          <h2>Theranos has the world's highest concentration of Ionic expertise outside of the company, and we use that depth to help our clients work through the biggest and most nuanced challenges of building Ionic apps and PWAs at scale.</h2>
          <h3>What We Do</h3>
        </div>
      </div>
    ];
  }
}

