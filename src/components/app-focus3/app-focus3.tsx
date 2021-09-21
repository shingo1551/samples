import { Component, h, State } from '@stencil/core';
import { Form3 } from './form3';

@Component({
  tag: 'app-focus3',
  shadow: true,
})
export class AppFocus3 {
  @State() form = {} as Form3;

  componentDidRender() {
    const form = this.form;
    form.inputs = [];
    const div = document.querySelector('.app-focus');
    form.button = div.querySelector('button');

    div.querySelectorAll('input').forEach(el => form.inputs.push(el));
    form.inputs.sort((i1, i2) => i1.tabIndex - i2.tabIndex);
  }

  render() {
    return (
      <div class="app-focus">
        <p>FOCUS3</p>
        <app-input3 form={this.form} tabIndex={4} />
        <app-input3 form={this.form} tabIndex={3} disabled />
        <app-input3 form={this.form} tabIndex={2} />
        <app-input3 form={this.form} tabIndex={1} />
        <div>
          <button>OK</button>
        </div>
      </div>
    );
  }

}
