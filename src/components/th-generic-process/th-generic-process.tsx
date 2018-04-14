import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'th-generic-process',
  styleUrl: 'th-generic-process.css',
  shadow: true
})
export class ThGenericProcess {

  @Prop() number: string;
  @Prop() title: string
  
  render() {
    return [
      <div class="container">
        <div class="title">
          <svg height="50" width="50">
            <circle cx="25" cy="25" r="25"/>
            <text x="50%" y="50%" dy="7.5px">{this.number}</text>
          </svg>
          <div class="section-title-container">{this.title}</div>
        </div>
        <div class="copy">
          <p>Our architects help plan the optimal strategy to improve team velocity and collaboration, while also addressing key technical challenges.</p>
        </div>
      </div>
    ];
  }
}

