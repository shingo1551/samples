import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-focus2',
  styleUrl: 'app-focus2.css',
  shadow: false,
})
export class AppFocus2 {

  componentDidRender() {
    document.querySelectorAll('input').forEach(elm => elm.addEventListener('keyup', this.focus));
  }

  focus = (ev: KeyboardEvent) => {
    console.log(ev);
  }

  render() {
    return (
      <div class="app-focus2">
        <p>FOCUS2</p>
        <div>
          <input type="text" />
        </div>

        <div>
          <input type="text" />
        </div>

        <div>
          <input type="text" />
        </div>

        <div>
          <input type="text" />
        </div>

        <div>
          <button>OK</button>
        </div>
      </div>
    );
  }

}
