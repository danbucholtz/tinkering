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
            <ion-content>
              <ion-list>
                <ion-item href="/">
                  <ion-label>Home</ion-label>
                </ion-item>
                <ion-item href="/about">
                  <ion-label>About</ion-label>
                </ion-item>
                <ion-item href="https://medium.com/@codetherapy">
                  <ion-label>Blog</ion-label>
                </ion-item>
                <ion-item href="/solutions">
                  <ion-label>Solutions</ion-label>
                </ion-item>
                <ion-item href="/architecture">
                  <ion-label>Architecture Consulting</ion-label>
                </ion-item>
                <ion-item href="/training">
                  <ion-label>Training/Workshops</ion-label>
                </ion-item>
                <ion-item href="/engineering">
                  <ion-label>Engineering Consulting</ion-label>
                </ion-item>
                <ion-item href="/culture">
                  <ion-label>Culture</ion-label>
                </ion-item>
                <ion-item href="/careers">
                  <ion-label>Careers</ion-label>
                </ion-item>
                <ion-item href="/contact">
                  <ion-label>Contact</ion-label>
                </ion-item>
              </ion-list>
            </ion-content>
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
            <a href="https://medium.com/@codetherapy">Blog</a>
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

