import { Component, h } from '@stencil/core';
import { form } from './focus';

@Component({
  tag: 'app-focus3',
  styleUrl: 'app-focus3.css',
  shadow: false,
})
export class AppFocus3 {

  componentDidRender() {
    form.inputs = [];
    const div = document.querySelector('.app-focus3');
    form.button = div.querySelector('button');

    div.querySelectorAll('input').forEach(el => form.inputs.push(el));
    form.inputs.sort((i1, i2) => i1.tabIndex - i2.tabIndex);
  }

  render() {
    return (
      <div class="app-focus3">
        <p>FOCUS3</p>
        <app-input tabIndex={4} />
        <app-input tabIndex={3} disabled />
        <app-input tabIndex={2} />
        <app-input tabIndex={1} />
        <div>
          <button>OK</button>
        </div>
      </div>
    );
  }

}
