import { Component, h, Method, Prop } from '@stencil/core';
import { Form4 } from './form4';

@Component({
  tag: 'app-input4',
  shadow: false,
})
export class AppInput4 {
  @Prop() tabIndex: number;
  @Prop() disabled: boolean;
  @Prop() form: Form4;

  input: HTMLInputElement;

  @Method()
  public async focus4() {
    this.input.focus();
  }

  next = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      const index = (ev.target as HTMLAppInput4Element).tabIndex;
      const next = this.form.inputs.find(el => index < el.tabIndex && !el.disabled);
      if (next)
        next.focus4();
      else
        this.form.button.focus();
    }
  }

  render() {
    return (
      <div>
        <input type="text" tabIndex={this.tabIndex} disabled={this.disabled} onKeyUp={this.next} ref={el => this.input = el} />
      </div>
    );
  }

}
