import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-focus1',
  shadow: false,
})
export class AppFocus1 {

  componentDidRender() {
    const inputs = [];
    const div = document.querySelector('.app-focus');
    const button = div.querySelector('button');
    div.querySelectorAll('input').forEach(el => inputs.push(el));

    inputs.forEach((el, i) => {
      const next = inputs[i + 1];
      el.addEventListener('keyup', (ev) => this.focus(ev, next ? next : button));
    })
  }

  focus = (ev: KeyboardEvent, next: HTMLElement) => {
    if (ev.key === 'Enter')
      next.focus();
  }

  render() {
    return (
      <div class="app-focus" >
        <p>FOCUS1</p>
        <div>
          <input type="text" />
        </div>

        <div>
          <input type="text" />
        </div>

        <div>
          <input type="text" />
        </div>

        <div>
          <input type="text" />
        </div>

        <div>
          <button>OK</button>
        </div>
      </div>
    );
  }

}
