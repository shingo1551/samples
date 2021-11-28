import { Component, h, State } from '@stencil/core';
import { Form4 } from './form4';

@Component({
  tag: 'app-focus4',
  styleUrl: 'app-focus4.pcss',
  shadow: true,
})
export class AppFocus4 {
  @State() form = {} as Form4;
  div: HTMLDivElement;

  componentDidRender() {
    const form = this.form;
    form.inputs = [];
    form.button = this.div.querySelector('button');

    this.div.querySelectorAll('app-input4').forEach(el => form.inputs.push(el));
    form.inputs.sort((i1, i2) => i1.tabIndex - i2.tabIndex);
  }

  render() {
    return (
      <div class="app-focus" ref={el => this.div = el} >
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
