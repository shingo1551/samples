import { Component, h } from '@stencil/core';
import { Route, match } from 'stencil-router-v2';
import { Router } from '../../shared/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <main>
          <Router.Switch>
            <Route path="/">
              <app-home />
            </Route>
            <Route path={match('/profile/:name')} render={({ name }) => <app-profile name={name} />} />
            <Route path="/focus1">
              <app-focus1 />
            </Route>
            <Route path="/focus2">
              <app-focus2 />
            </Route>
            <Route path="/focus3">
              <app-focus3 />
            </Route>
            <Route path="/focus4">
              <app-focus4 />
            </Route>
            <Route path="/table">
              <app-table />
            </Route>
          </Router.Switch>
        </main>
      </div>
    );
  }
}
