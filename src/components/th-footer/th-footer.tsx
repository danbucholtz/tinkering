import { Component } from '@stencil/core';

@Component({
  tag: 'th-footer',
  styleUrl: 'th-footer.css',
  shadow: true
})
export class ThFooter {
  
  render() {
    return [
      <div class="container">
        Footer
      </div>
    ];
  }
}

