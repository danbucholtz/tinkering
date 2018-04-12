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

        <th-main-content></th-main-content>

        <th-architecture-process></th-architecture-process>

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

