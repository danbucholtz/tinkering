import { Component } from '@stencil/core';

@Component({
  tag: 'th-header',
  styleUrl: 'th-header.css',
  shadow: true
})
export class ThHeader {
  
  render() {
    return [
      <div class="container">
        <a href="/">
          <div class="logo">
            <img src="/assets/images/logo.png"></img>
            <h1>Theracode</h1>
          </div>
        </a>
        <nav>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/solutions">Solutions</a>
          <a href="/culture">Culture</a>
          <a href="/contact"><ion-button>Contact</ion-button></a>
        </nav>
        <div class="menu-icon">Boom</div>

      </div>
    ];
  }
}

