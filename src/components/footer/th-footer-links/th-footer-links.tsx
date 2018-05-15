import { Component } from '@stencil/core';

@Component({
  tag: 'th-footer-links',
  styleUrl: 'th-footer-links.css',
  shadow: true
})
export class ThFooterLinks {
  
  render() {
    return [
      <div class="grid">
        <div class="icon-container">
          <img src="/assets/images/logo.png"></img>
          <h1>Theracode</h1>
        </div>
        <div class="about-container">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/architecture">Architecture</a></li>
            <li><a href="https://medium.com/@codetherapy">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="team-container">
          <ul>
            <li><a href="/culture">Culture</a></li>
            <li><a href="/engineering">Engineering</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/training">Training</a></li>
          </ul>
        </div>
      </div>
    ];
  }
}

