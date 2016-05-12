export default $http => {
  const apiUri = 'http://localhost:3000/api';
  return {
    listUsers() {
      return $http({
        method: 'GET',
        url: `${apiUri}/user/list`
      });
    }
  };
};
