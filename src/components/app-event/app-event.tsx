import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'app-event',
  styleUrl: 'app-event.pcss',
  shadow: true,
})
export class AppEvent {
  @State() count = 0;

  button: HTMLButtonElement;
  timer: number;

  async connectedCallback() {
    console.log('connectedCallback')
    this.timer = setInterval(() => {
      const event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
      });
      this.button.dispatchEvent(event);
    }, 1000 * 60 * 6);
  }

  async disconnectedCallback() {
    console.log('disconnectedCallback')
    if (this.timer)
      clearInterval(this.timer);
  }

  handleClick = (e: MouseEvent) => {
    console.log(e);
    this.count++;
  }

  render() {
    return (
      <Host>
        <button ref={el => this.button = el} onClick={this.handleClick} >Event</button>
        <p>{this.count}</p>
      </Host>
    );
  }

}
