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
        <th-footer-links></th-footer-links>
        <th-footer-mailing-list></th-footer-mailing-list>
      </div>,
      <div class="footer">
        © 2018 Theracode LLC
      </div>
    ];
  }
}

