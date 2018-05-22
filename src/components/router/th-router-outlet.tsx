import { Component, Element, Method, Prop } from '@stencil/core';
import { QueueApi } from '@stencil/core/dist/declarations';
import { skipTwoFrames } from './util';

@Component({
  tag: 'th-router-outlet',
  styleUrl: 'th-router-outlet.css'
})
export class ThRouterOutlet {

  @Element() element: HTMLElement;
  @Prop({ context: 'queue'}) queue: QueueApi;
  
  @Method()
  async activateComponent(tagName: string) {
    const routeElement = document.createElement(tagName) as HTMLElement;
    routeElement.classList.add(HIDDEN_COMPONENT);
    this.element.appendChild(routeElement);
    if ((routeElement as any).componentOnReady) {
      await (routeElement as any).componentOnReady();
    }

    await skipTwoFrames(this.queue.read);
    // okay, cool, we've chill out for a hot minute, we've read some frames
    // and measured ourselves up good and nice
    await showTopView(this.queue.write, this.element);
  }

  render() {
    return []
  }
}

export function showTopView(write: Function, element: HTMLElement) {
  return new Promise((resolve) => {
    write(() => {
      element.removeChild(element.firstChild);
      window.scrollTo(0, 0);
      resolve();
    });
  });
}

const HIDDEN_COMPONENT = 'hidden-component';

