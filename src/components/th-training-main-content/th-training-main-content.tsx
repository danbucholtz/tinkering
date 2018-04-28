import { Component } from '@stencil/core';

@Component({
  tag: 'th-training-main-content',
  styleUrl: 'th-training-main-content.css',
  shadow: true
})
export class ThTrainingMainContent {
  
  render() {
    return [
      <div class="container">
        <div class="text-container">
          <h1>Professional Workshops</h1>
          <h2>We offer a variety of workshops and staff training options to level up Ionic skils and best practices throughout engineering organizations. We offer both on-site and online options.</h2>
          <a href="/contact"><ion-button>Work with Us</ion-button></a>
        </div>
      </div>
    ];
  }
}

