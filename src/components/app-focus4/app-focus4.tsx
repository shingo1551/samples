import { Component, h, State } from '@stencil/core';
import { Form4 } from './form4';

@Component({
  tag: 'app-focus4',
  shadow: false,
})
export class AppFocus4 {
  @State() form = {} as Form4;

  componentDidRender() {
    const form = this.form;
    form.inputs = [];
    const div = document.querySelector('.app-focus');
    form.button = div.querySelector('button');

    div.querySelectorAll('app-input4').forEach(el => form.inputs.push(el));
    form.inputs.sort((i1, i2) => i1.tabIndex - i2.tabIndex);
  }

  render() {
    return (
      <div class="app-focus">
        <p>FOCUS4</p>
        <app-input4 form={this.form} tabIndex={4} />
        <app-input4 form={this.form} tabIndex={3} disabled />
        <app-input4 form={this.form} tabIndex={2} />
        <app-input4 form={this.form} tabIndex={1} />
        <div>
          <button>OK</button>
        </div>
      </div>
    );
  }

}
