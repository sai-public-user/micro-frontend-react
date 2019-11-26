import { registerApplication, start } from 'single-spa'

registerApplication(
  'RX360',
  () => import('./src/react/main.app.js'),
  () => location.pathname === "/rxservice" ? false : true
);

registerApplication(
  'RXService',
  () => import('./src/react1/main.app.js'),
  () => location.pathname === "/rx360" ? false : true
);

start();