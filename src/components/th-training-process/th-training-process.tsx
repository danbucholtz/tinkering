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
        bodyContent="The best teams are the most well-informed teams. We offer a series of workshops and training sessions to level up entire departments of developers. Each workshop is led by an experienced trainer and Ionic expert on the topic of delivering enterprise Ionic applications and best practices."
        buttonClass="purple-btn"
        titleClass="purple-text"
      ></th-generic-process>
    ];
  }
}

