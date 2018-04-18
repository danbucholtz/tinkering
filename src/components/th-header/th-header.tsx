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
        <div class="logo">
          <img src="/assets/logo.png"></img>
          <h1>Theracode</h1>
        </div>
        <nav>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/solutions">Solutions</a>
          <a href="/Team">Team</a>
          <ion-button>Contact</ion-button>
        </nav>
        <div class="menu-icon">Boom</div>

      </div>
    ];
  }
}

