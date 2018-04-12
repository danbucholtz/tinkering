import { Component } from '@stencil/core';

@Component({
  tag: 'th-generic-process',
  styleUrl: 'th-generic-process.css',
  shadow: true
})
export class ThGenericProcess {
  
  render() {
    return [
      <div class="container">
        <div class="title">
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="25"/>
            <text _ngcontent-c11="" text-anchor="middle" x="50%" y="50%" class="dark" dy="7.5px" style="font-size: 30px;">1</text>
          </svg>
          <span class="section-title">Architecture</span>
        </div>
        <div class="copy">
          <p>Our architects help plan the optimal strategy to improve team velocity and collaboration, while also addressing key technical challenges.</p>
        </div>
      </div>
    ];
  }
}

