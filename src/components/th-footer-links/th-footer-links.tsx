import { Component } from '@stencil/core';

@Component({
  tag: 'th-footer-links',
  styleUrl: 'th-footer-links.css',
  shadow: true
})
export class ThFooterLinks {
  
  render() {
    return [
      <div class="container">
        <div class="icon-container">
          <img src="/assets/logo.png"></img>
          <h1>Theracode</h1>
        </div>
        <div class="about-container">
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/solutions">Solutions</a></li>
          </ul>
        </div>
        <div class="team-container">
          <ul>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/team">Team</a></li>
          </ul>
        </div>
      </div>
    ];
  }
}

