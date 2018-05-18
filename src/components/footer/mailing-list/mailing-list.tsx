import { Component, State } from '@stencil/core';

@Component({
  tag: 'mailing-list',
  styleUrl: 'mailing-list.css',
  
})
export class MailingList {
  
  @State() emailAddress: string;
  @State() postResult: SuccessMessage;

  async submitEmail() {
    /*try {
      await postEmailAddress(this.emailAddress);
      this.postResult = {
        success: true,
        message: 'Thank you for subscribing'
      }
    } catch (ex) {
      this.postResult = {
        success: false,
        message: 'Something went wrong. Please try again.'
      }
    }
    setTimeout(() => {
      this.postResult = null;
    }, 500000);
    */
  }

  render() {
    return [
      <div class="container">
        <h1>Start Building Better Apps Today</h1>
        <p>Are you an enterprise building with Ionic? Do you want the best information and resources on how to ensure your project is successful? Sign up for our mailing list to have the very best Ionic in enterprise information sent directly to your inbox. We will never, under any circumstances, spam you or sell your info.</p>
        <div class="email-container">
          <ion-item>
            <ion-input type="email" placeholder="Email Address" onInput={(event: any) => { 
              this.emailAddress = event.target.value;
              }}></ion-input>
          </ion-item>
          <ion-button onClick={ () => { this.submitEmail() }}>Subscribe</ion-button>
        </div>
        <div class="submit-text">{ this.postResult ? this.postResult.message : ''}</div>
      </div>
    ];
  }
}

export function postEmailAddress(_emailAddress: string) {
  //return Promise.reject(new Error(''));
}

interface SuccessMessage {
  success: boolean;
  message: string;
}