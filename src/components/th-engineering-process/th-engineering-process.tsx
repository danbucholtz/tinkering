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
        bodyContent="We go beyond consulting and training, to collaborating directly with client engineers on real application code and infrastructure. Not only is each of our engineers a top-notch Ionic developer, but they're well versed in the entire stack to help resolve any and all problems your team may encounter."
        buttonClass="red-btn"
        titleClass="red-text"
      ></th-generic-process>
    ];
  }
}
