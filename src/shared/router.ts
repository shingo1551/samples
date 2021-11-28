import { createRouter } from '@stencil/router';
export const Router = createRouter();
export const push = Router.push;

// loading
import { createStore } from '@stencil/store';
const { state } = createStore({ loading: false });

export function setLoading(b: boolean) {
  state.loading = b;
  if (b) {
    setTimeout(() => {
      state.loading = false;
    }, 80);
  }
}

export default state;
