import '@ionic/core';
import { Component } from '@stencil/core';

@Component({
  tag: 'th-site',
  styleUrl: 'th-site.css'
})
export class ThSite {

  render() {
    return (
      <div class="grid">
        <th-header></th-header>

        <aside class="sidebar-left">
          Left Sidebar
        </aside>

        <article>
          Article
        </article>

        <aside class="sidebar-right">
          Right Sidebar
        </aside>
        
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

