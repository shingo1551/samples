import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-focus1',
  styleUrl: 'app-focus1.css',
  shadow: false,
})
export class AppFocus1 {
  inputs: HTMLInputElement[] = [];

  componentDidRender() {
    this.inputs = [];
    const div = document.querySelector('.app-focus1');
    const button = div.querySelector('button');
    div.querySelectorAll('input').forEach(elm => this.inputs.push(elm));

    this.inputs.forEach((_, i) => this.addEvent(i, button));
  }

  addEvent = (i: number, button: HTMLButtonElement) => {
    const next = this.inputs[i + 1];
    this.inputs[i].addEventListener('keyup', (ev) => this.focus(ev, next ? next : button));
  }

  focus = (ev: KeyboardEvent, next: HTMLElement) => {
    console.log(next);
    if (ev.key === 'Enter')
      next.focus();
  }

  render() {
    return (
      <div class="app-focus1">
        <p>FOCUS1</p>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button>OK</button>
      </div>
    );
  }

}
