import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-focus1',
  styleUrl: 'app-focus1.css',
  shadow: true,
})
export class AppFocus1 {

  render() {
    return (
      <div class="app-focus1">
        <p>FOCUS1</p>
      </div>
    );
  }

}
