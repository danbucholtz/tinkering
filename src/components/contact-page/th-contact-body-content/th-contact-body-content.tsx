import { Component, State } from '@stencil/core';

@Component({
  tag: 'th-contact-body-content',
  styleUrl: 'th-contact-body-content.css',
  
})
export class ThContactBodyContent {

  @State() name = "";
  @State() email = "";
  @State() message = "";
  
  render() {
    const isActive = !!(this.name.length && this.email.length && this.message.length);
    return [
      <div class="container">
        <h1>Let's chat</h1>
        <form>
          <div class="input-group">
            <h2>Name<span class="required">  *</span></h2>
            <input type="text" placeholder="Your Name" class="form-input" onInput={(event: any) => this.name = event.target.value}/>
          </div>
          <div class="input-group">
            <h2>Email Address<span class="required">  *</span></h2>
            <input type="text" placeholder="Your Email Address" class="form-input" onInput={(event: any) => this.email = event.target.value}/>
          </div>
          <div class="input-group">
            <h2>Message<span class="required">  *</span></h2>
            <textarea placeholder="Message" class="form-input" onInput={(event: any) => this.message = event.target.value}/>
          </div>
          <div class="input-group">
            <ion-button expand="block" disabled={!isActive}>Contact Us</ion-button>
          </div>
        </form>
      </div>

    ];
  }
}


/*
<div class="input-group">
            <div>
              <label>Email Address<span class="required">*</span></label>
            </div>
            <input type="text" placeholder="Your Email"/>
          </div>
          <div class="input-group">
            <div>
              <label>Message<span class="required">*</span></label>
            </div>
            <textarea/>
          </div>*/