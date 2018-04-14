import { Component } from '@stencil/core';

@Component({
  tag: 'th-training-process',
  styleUrl: 'th-training-process.css',
  shadow: true
})
export class ThTrainingProcess {
  
  render() {
    return [
      <th-generic-process number="2" title="Training"></th-generic-process>
    ];
  }
}

