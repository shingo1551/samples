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
        <div class="table">
          <div class="row">
            <div class="col1">COL1</div>
            <div class="col2">COL2</div>
            <div class="col3">
              <div class="left border">-</div>
              <div class="center">99</div>
              <div class="right border">+</div>
            </div>
          </div>
          <div class="row">
            <div class="col1">COL1</div>
            <div class="col2">COL2</div>
            <div class="col3">COL3</div>
          </div>
        </div>
      </div>
    );
  }

}
