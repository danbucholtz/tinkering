import { Component } from '@stencil/core';

@Component({
  tag: 'th-engineering-process',
  styleUrl: 'th-engineering-process.css',
  shadow: true
})
export class ThEngineeringProcess {
  
  render() {
    return [
      <th-generic-process 
        imagePath="/assets/images/code.png"
        titleText="Engineering"
        bodyContent="Our expert Ionic architects and engineers get hands-on alongside our clients to help implement critical pieces of applications and infrastructure."
        buttonClass="red-btn"
        titleClass="red-text"
      ></th-generic-process>
    ];
  }
}

