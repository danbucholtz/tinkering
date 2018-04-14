import { Component } from '@stencil/core';

@Component({
  tag: 'th-engineering-process',
  styleUrl: 'th-engineering-process.css',
  shadow: true
})
export class ThEngineeringProcess {
  
  render() {
    return [
      <th-generic-process number="3" title="Engineering"></th-generic-process>
    ];
  }
}

