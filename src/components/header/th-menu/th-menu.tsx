import { Component } from '@stencil/core';

@Component({
  tag: 'th-menu',
  styleUrl: 'th-menu.css',
  
})
export class ThMenu {
  
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
          </ion-menu>
          <div main></div>
        </div>,
    ];
  }
}

