import { Component } from '@stencil/core';

@Component({
  tag: 'th-careers-main-content',
  styleUrl: 'th-careers-main-content.css',
  shadow: true
})
export class ThCareersMainContent {
  
  render() {
    return [
      <div class="container">
        <div class="text-container">
          <h1>Job Opportunities</h1>
          <h2>At Theracode, you'll do some of the most fulfilling work of your life, all while working remotely and being compensated generously. Everyone that joins our team is exceptional, and we think everyone is significantly more well rounded when they leave. We take a lot of pride in career development and giving each individual an opportunity to play a variety of roles within each project. For most people the work is challenging, but also very rewarding. If this sounds like something you're up for, check out our openings below.</h2>
        </div>
      </div>
    ];
  }
}


