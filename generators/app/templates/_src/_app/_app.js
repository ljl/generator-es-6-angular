import angular from 'angular';
import AppCtrl from './controllers/app.js';
import Api from './services/api.js';
import '../style/main.scss';

const app = () => ({
  template: require('./views/app.html'),
  controller: AppCtrl,
  controllerAs: 'app'
});

const MODULE_NAME = '<%= name %>';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .factory('Api', Api)
  .controller('AppCtrl', AppCtrl);

document.addEventListener('readystatechange', () => {
  // Attach to app element when ready
  if (document.readyState === 'complete') {
    const appElement = document.createElement('app');
    const attachTo = document.getElementById('app');
    if (attachTo) {
      attachTo.appendChild(appElement);
    }
    angular.element(document.getElementById('app')).ready(() => {
      angular.bootstrap(document.getElementById('app'), [MODULE_NAME]);
    });
  }
});

export default MODULE_NAME;
