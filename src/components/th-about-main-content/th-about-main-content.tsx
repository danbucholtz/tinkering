import { Component } from '@stencil/core';

@Component({
  tag: 'th-about-main-content',
  styleUrl: 'th-about-main-content.css',
  shadow: true
})
export class ThAboutMainContent {
  
  render() {
    return [
      <div class="container">
        <div class="text-container">
          <h1>About Theracode</h1>
          <h2>Theracode is the world's #1 Ionic consulting firm. We help medium to large companies make their Ionic apps and PWAs successful through training, architectural best practices, and engineering staff augmentation. We partner with teams throughout the entire software development life cycle in order to ensure the best quality results.</h2>
        </div>
      </div>
    ];
  }
}

