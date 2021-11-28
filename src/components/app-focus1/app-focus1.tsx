import { Component, h } from '@stencil/core';
import state, { setLoading } from '../../shared/router'

@Component({
  tag: 'app-focus1',
  styleUrl: 'app-focus1.pcss',
  shadow: true,
})
export class AppFocus1 {
  div: HTMLDivElement;

  connectedCallback() {
    setLoading(true)
  }

  componentDidRender() {
    if (!this.div)
      return;

    const inputs = [];
    const button = this.div.querySelector('button');
    this.div.querySelectorAll('input').forEach(el => inputs.push(el));

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
    if (state.loading)
      return null;

    return (
      <div class="app-focus" ref={el => this.div = el} >
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
