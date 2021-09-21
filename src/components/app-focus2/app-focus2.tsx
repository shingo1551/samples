import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-focus2',
  shadow: true,
})
export class AppFocus2 {
  inputs = [] as HTMLInputElement[];
  button = null as HTMLButtonElement;

  componentDidRender() {
    this.inputs = [];
    const div = document.querySelector('.app-focus');
    this.button = div.querySelector('button');

    div.querySelectorAll('input').forEach(el => this.inputs.push(el));
    this.inputs.sort((i1, i2) => i1.tabIndex - i2.tabIndex);

    this.inputs.forEach((el) => {
      el.addEventListener('keyup', (ev) => this.focus(ev));
    })
  }

  focus = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      const index = (ev.target as HTMLElement).tabIndex;
      const next = this.inputs.find(el => index < el.tabIndex && !el.disabled);
      if (next)
        next.focus();
      else
        this.button.focus();
    }
  }

  render() {
    return (
      <div class="app-focus">
        <p>FOCUS2</p>
        <div>
          <input type="text" tabIndex={4} />
        </div>

        <div>
          <input type="text" tabIndex={3} disabled />
        </div>

        <div>
          <input type="text" tabIndex={2} />
        </div>

        <div>
          <input type="text" tabIndex={1} />
        </div>

        <div>
          <button>OK</button>
        </div>
      </div>
    );
  }

}
