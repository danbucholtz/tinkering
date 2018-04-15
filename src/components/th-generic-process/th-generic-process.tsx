import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'th-generic-process',
  styleUrl: 'th-generic-process.css',
})
export class ThGenericProcess {

  @Prop() imagePath: string;
  @Prop() titleText: string;
  @Prop() bodyContent: string;
  @Prop() buttonClass: string = '';
  @Prop() titleClass: string = '';
  
  render() {
    const titleClasses = `title ${this.titleClass}`;
    return (
      <div class="container">
        <div class="img-container">
          <img class="icon" src={this.imagePath} decoding="async"></img>
        </div>
        <h2 class={titleClasses}>{this.titleText}</h2>
        <div class="body">
        {this.bodyContent}
        </div>
        <div class="btn-container">
          <ion-button class={this.buttonClass}>Learn More</ion-button>
        </div>
      </div>
    )
  }
}

