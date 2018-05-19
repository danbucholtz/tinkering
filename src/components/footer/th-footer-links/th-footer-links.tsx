import { Component } from '@stencil/core';

@Component({
  tag: 'th-footer-links',
  styleUrl: 'th-footer-links.css',
})
export class ThFooterLinks {
  
  render() {
    return [
      <div class="th-footer-links-grid">
        <div class="th-footer-links-icon-container">
          <img class="th-footer-links-img" src="/assets/images/logo.png"></img>
          <h1 class="th-footer-links-header">Theracode</h1>
        </div>
        <div class="th-footer-links-about-container">
          <ul class="th-footer-links-ul">
            <li>
              <stencil-route-link class="th-footer-links-a" url="/about">About</stencil-route-link>
            </li>
            <li>
              <stencil-route-link class="th-footer-links-a" url="/architecture">Architecture</stencil-route-link>
            </li>
            <li>
              <a class="th-footer-links-a" href="https://medium.com/@codetherapy">Blog</a>
            </li>
            <li>
              <stencil-route-link class="th-footer-links-a" url="/careers">Careers</stencil-route-link>
            </li>
            <li>
              <stencil-route-link class="th-footer-links-a" url="/contact">Contact</stencil-route-link>
            </li>
            <li>
              <a class="th-footer-links-a" href="https://github.com/Theracode/engineering-code-of-conduct">Code of Conduct</a>
            </li>
            
          </ul>
        </div>
        <div class="th-footer-links-team-container">
          <ul class="th-footer-links-ul">
            <li>
              <stencil-route-link class="th-footer-links-a" url="/culture">Culture</stencil-route-link>
            </li>
            <li>
              <stencil-route-link class="th-footer-links-a" url="/engineering">Engineering</stencil-route-link>
            </li>
            <li>
              <stencil-route-link class="th-footer-links-a" url="/">Home</stencil-route-link>
            </li>
            <li>
              <stencil-route-link class="th-footer-links-a" url="/solutions">Solutions</stencil-route-link>
            </li>
            <li>
              <stencil-route-link class="th-footer-links-a" url="/training">Training</stencil-route-link>
            </li>
          </ul>
        </div>
      </div>
    ];
  }
}

