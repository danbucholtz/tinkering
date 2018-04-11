import { Component } from '@stencil/core';

@Component({
  tag: 'th-header-desktop',
  styleUrl: 'th-header-desktop.css',
  shadow: true
})
export class ThHeaderDesktop {
  
  render() {
    return [
      <div class="container">
        <div class="logo">Logo</div>
        <nav>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/solutions">Solutions</a>
          <a href="https://twitter.com/danbucholtz">Twitter</a>
          <ion-button>Contact</ion-button>
        </nav>
      </div>
    ];
  }
}

