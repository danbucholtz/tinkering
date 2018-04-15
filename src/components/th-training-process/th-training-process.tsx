import { Component } from '@stencil/core';

@Component({
  tag: 'th-training-process',
  styleUrl: 'th-training-process.css',
  shadow: true
})
export class ThTrainingProcess {
  
  render() {
    return [
      <th-generic-process 
        imagePath="/assets/images/training.png"
        titleText="Training"
        bodyContent="Our programs provide high-impact Ionic developers by providing workshops, developer support, remote training, and self-guided online training."
        buttonClass="purple-btn"
        titleClass="purple-text"
      ></th-generic-process>
    ];
  }
}

