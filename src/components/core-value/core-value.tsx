import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'core-value',
  styleUrl: 'core-value.css',
  shadow: true
})
export class CoreValue {

  @Prop() header = '';
  @Prop() body = '';

  render() {
    return <div class="container">
      <h1>{this.header}</h1>
      <p>{this.body}</p>
    </div>
  }
}