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
            <li><a class="th-footer-links-a" href="/about">About</a></li>
            <li><a class="th-footer-links-a" href="/architecture">Architecture</a></li>
            <li><a class="th-footer-links-a" href="https://medium.com/@codetherapy">Blog</a></li>
            <li><a class="th-footer-links-a" href="/careers">Careers</a></li>
            <li><a class="th-footer-links-a" href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="th-footer-links-team-container">
          <ul class="th-footer-links-ul">
            <li><a class="th-footer-links-a" href="/culture">Culture</a></li>
            <li><a class="th-footer-links-a" href="/engineering">Engineering</a></li>
            <li><a class="th-footer-links-a" href="/">Home</a></li>
            <li><a class="th-footer-links-a" href="/solutions">Solutions</a></li>
            <li><a class="th-footer-links-a" href="/training">Training</a></li>
          </ul>
        </div>
      </div>
    ];
  }
}

