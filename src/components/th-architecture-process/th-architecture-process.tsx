import { Component } from '@stencil/core';

@Component({
  tag: 'th-architecture-process',
  styleUrl: 'th-architecture-process.css',
  shadow: true
})
export class ThArchitectureProcess {
  
  render() {
    return [
      <th-generic-process number="1" title="Architecture"></th-generic-process>
    ];
  }
}

