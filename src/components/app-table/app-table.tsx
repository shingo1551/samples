import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-table',
  styleUrl: 'app-table.css',
  shadow: false,
})
export class AppTable {

  render() {
    return (
      <div class="app-table" >
        <p>TABLE</p>
        <div>
        </div>
      </div>
    );
  }

}
