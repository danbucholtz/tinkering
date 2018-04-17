import { Component } from '@stencil/core';

@Component({
  tag: 'th-good-hands',
  styleUrl: 'th-good-hands.css',
  shadow: true
})
export class ThGoodHands {
  
  render() {
    return [
      <div class="container">
        <h2><strong>You’re in good company.</strong> Some of the smartest and biggest companies in the world depend on Theracode to guide them through their journey.</h2>
      </div>
    ];
  }
}

