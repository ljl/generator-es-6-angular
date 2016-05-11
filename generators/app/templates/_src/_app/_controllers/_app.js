export default class AppCtrl {
  constructor($scope, Api) {
    $scope.appName = '<%= name %>';

    Api.listUsers().then((result) => {
      console.log(result.data);
    });

    this.test = true;
  }
}
