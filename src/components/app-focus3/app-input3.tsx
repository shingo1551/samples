import { Component, h, Prop } from '@stencil/core';
import { Form3 } from './form3';

@Component({
  tag: 'app-input3',
  shadow: false,
})
export class AppInput3 {
  @Prop() tabIndex: number;
  @Prop() disabled: boolean;
  @Prop() form: Form3;

  next = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      const index = (ev.target as HTMLElement).tabIndex;
      const next = this.form.inputs.find(el => index < el.tabIndex && !el.disabled);
      if (next)
        next.focus();
      else
        this.form.button.focus();
    }
  }

  render() {
    return (
      <div>
        <input type="text" tabIndex={this.tabIndex} disabled={this.disabled} onKeyUp={this.next} />
      </div>
    );
  }

}
