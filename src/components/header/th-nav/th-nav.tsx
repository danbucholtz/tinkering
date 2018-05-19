import { Component } from '@stencil/core';

@Component({
  tag: 'th-nav',
  styleUrl: 'th-nav.css',
  
})
export class ThNav {
  
  render() {
    return [
      <div class="container" main>
        <a href="/">
          <div class="logo">
            <img src="/assets/images/logo.png"></img>
            <h1 class="title">Theracode</h1>
          </div>
        </a>
        <nav>
          <stencil-route-link url="/about">About</stencil-route-link>
          <a href="https://medium.com/@codetherapy">Blog</a>
          <stencil-route-link url="/solutions">Solutions</stencil-route-link>
          <stencil-route-link url="/culture">Culture</stencil-route-link>
          <stencil-route-link url="/contact">
            <ion-button>Contact</ion-button>
          </stencil-route-link>
        </nav>
        <div class="menu-icon">
          <ion-menu-button></ion-menu-button>
        </div>
      </div>
    ];
  }
}

