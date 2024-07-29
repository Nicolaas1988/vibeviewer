// start-all.js
const concurrently = require('concurrently');

concurrently([
  { command: 'npm run backend', name: 'backend', prefixColor: 'blue' },
  { command: 'npm run frontend', name: 'frontend', prefixColor: 'green' }
], {
  prefix: 'name',
  killOthers: ['failure', 'success'],
  restartTries: 3
}).then((result) => {
  console.log('Both processes are running successfully');
}).catch((err) => {
  console.error('One of the processes failed', err);
});
