import { App } from '../app';

export function startGame(): void {
  const appElement = document.getElementById('main');

  if (!appElement) {
    throw Error('App root element not found');
  }

  new App(appElement).start();
  }
