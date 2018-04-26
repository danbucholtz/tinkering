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
        bodyContent="For Enterprise teams working on their first implementation, or upgrading an existing app, we will serve as a pivotal expert to ensure the project's success. Teams that work with Theracode enjoy faster go-to-market, higher quality applications, and more effective team members."
        buttonClass="green-btn"
        titleClass="green-text"
      ></th-generic-process>
    ];
  }
}

