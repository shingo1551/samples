import { Component, h, State } from '@stencil/core';
import { Form } from './focus';

@Component({
  tag: 'app-focus3',
  styleUrl: 'app-focus3.css',
  shadow: false,
})
export class AppFocus3 {
  @State() form = {} as Form;

  componentDidRender() {
    const form = this.form;
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
        <app-input form={this.form} tabIndex={4} />
        <app-input form={this.form} tabIndex={3} disabled />
        <app-input form={this.form} tabIndex={2} />
        <app-input form={this.form} tabIndex={1} />
        <div>
          <button>OK</button>
        </div>
      </div>
    );
  }

}
