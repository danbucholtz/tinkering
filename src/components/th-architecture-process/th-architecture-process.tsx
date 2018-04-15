import { Component } from '@stencil/core';

@Component({
  tag: 'th-architecture-process',
  styleUrl: 'th-architecture-process.css',
  shadow: true
})
export class ThArchitectureProcess {
  
  render() {
    return [
      <th-generic-process 
        imagePath="/assets/images/architecture.png"
        titleText="Architecture"
        bodyContent="Our architects help plan the optimal strategy and solution to improve team velocity and collaboration, while also addressing key technical challenges throughout the entire stack."
        buttonClass="green-btn"
        titleClass="green-text"
      ></th-generic-process>
    ];
  }
}
