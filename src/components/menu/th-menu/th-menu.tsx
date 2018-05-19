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
            <div class="menu-container">
              <ion-menu-toggle>
                <stencil-route-link url="/">Home</stencil-route-link>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <stencil-route-link url="/about">About</stencil-route-link>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <stencil-route-link url="/architecture">Architecture Consulting</stencil-route-link>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <div>
                  <a href="https://medium.com/@codetherapy">Blog</a>
                </div>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <stencil-route-link url="/careers">Careers</stencil-route-link>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <div>
                  <a href="https://github.com/Theracode/engineering-code-of-conduct">Code of Conduct</a>
                </div>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <stencil-route-link url="/contact">Contact</stencil-route-link>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <stencil-route-link url="/culture">Culture</stencil-route-link>
              </ion-menu-toggle>
              <ion-menu-toggle>
                <stencil-route-link url="/engineering">Engineering Consulting</stencil-route-link>
                </ion-menu-toggle>
              <ion-menu-toggle>
                <stencil-route-link url="/solutions">Solutions</stencil-route-link>
                </ion-menu-toggle>
              <ion-menu-toggle>
                <stencil-route-link url="/training">Training &amp; Workshops</stencil-route-link>
              </ion-menu-toggle>
            </div>
          </ion-menu>
          <div main></div>
        </div>,
    ];
  }
}

