import { Component, h, Prop } from '@stencil/core';
import { form } from './focus';

@Component({
  tag: 'app-input',
  shadow: false,
})
export class AppInput {
  @Prop() tabIndex: number;
  @Prop() disabled: boolean;

  focus = (ev: KeyboardEvent) => {
    if (ev.key === 'Enter') {
      const index = (ev.target as HTMLElement).tabIndex;
      const next = form.inputs.find(el => index < el.tabIndex && !el.disabled);
      if (next)
        next.focus();
      else
        form.button.focus();
    }
  }

  render() {
    return (
      <div>
        <input type="text" tabIndex={this.tabIndex} disabled={this.disabled} onKeyUp={this.focus} />
      </div>
    );
  }

}
