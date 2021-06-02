import { App } from '../../src/app';

export function startGame(isAuthorized: boolean = false): void {
  const appElement = document.getElementById('main');

    if (!appElement) {
      throw Error('App root element not found');
    }

    new App(appElement).start();
  }
