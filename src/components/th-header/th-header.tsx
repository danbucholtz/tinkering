import { Component } from '@stencil/core';

@Component({
  tag: 'th-header',
  styleUrl: 'th-header.css',
  shadow: true
})
export class ThHeader {
  
  render() {
    return [
      <div>
        <ion-menu side="start">
            <ion-header>
              <ion-toolbar color="secondary">
                <ion-title>Left Menu</ion-title>
              </ion-toolbar>
            </ion-header>

            <ion-content>
              <ion-list>
                <ion-item>Open end Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
                <ion-item>Close Menu</ion-item>
              </ion-list>
            </ion-content>

            <ion-footer>
              <ion-toolbar color="secondary">
                <ion-title>Footer</ion-title>
              </ion-toolbar>
            </ion-footer>

          </ion-menu>,

        <div class="container" main>
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
          <div class="menu-icon">
            <ion-menu-button></ion-menu-button>
          </div>
        </div>
      </div>
    ];
  }
}

