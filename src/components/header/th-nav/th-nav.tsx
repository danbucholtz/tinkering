import { Component } from '@stencil/core';

@Component({
  tag: 'th-nav',
  styleUrl: 'th-nav.css',
  shadow: true
})
export class ThNav {
  
  render() {
    return [
      <div class="container" main>
        <a href="/">
          <div class="logo">
            <img src="/assets/images/logo.png"></img>
            <h1>Theracode</h1>
          </div>
        </a>
        <nav>
          <a href="/about">About</a>
          <a href="https://medium.com/@codetherapy">Blog</a>
          <a href="/solutions">Solutions</a>
          <a href="/culture">Culture</a>
          <a href="/contact"><ion-button>Contact</ion-button></a>
        </nav>
        <div class="menu-icon">
          <ion-menu-button></ion-menu-button>
        </div>
        <th-menu></th-menu>
      </div>
    ];
  }
}

