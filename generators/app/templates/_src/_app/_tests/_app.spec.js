import '../app.js';
import 'babel-polyfill';
import appCtrl from '../controllers/app.js';

describe('<%= name %>', () => {
  describe('AppCtrl', () => {
    let ctrl;
    let scope;
    let Api;

    beforeEach(angular.mock.module('<%= name %>'));
    beforeEach(angular.mock.inject(($controller, $rootScope) => {
      Api = {
        listUsers: () =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve('hans');
            }, 500);
          })
      };
      scope = $rootScope.$new();
      ctrl = $controller(appCtrl, {
        $scope: scope,
        Api: Api
      });
    }));

    it('should have correct appName', () => {
      expect(scope.appName).toBe('<%= name %>');
    });

    it('should have a true test', () => {
      expect(ctrl.test).toBe(true);
    });
  });
});
