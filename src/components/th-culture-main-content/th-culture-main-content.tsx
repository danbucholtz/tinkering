import { Component } from '@stencil/core';

@Component({
  tag: 'th-culture-main-content',
  styleUrl: 'th-culture-main-content.css',
  shadow: true
})
export class ThCultureMainContent {
  
  render() {
    return [
      <div class="container">
        <div class="text-container">
          <h1>Our Culture</h1>
          <h2>The Theracode team is a group of pragmatic problem solvers, creative coders, and clear communicators who take immense pride in our work. Curiosity and competitiveness drive us to learn new skils and create innovative solutions for our customers. Each of us have own unique set of why's, and we work to be better every single day.</h2>
          <a href="/careers"><ion-button>Job Openings</ion-button></a>
        </div>
      </div>
    ];
  }
}