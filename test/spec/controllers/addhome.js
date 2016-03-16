'use strict';

describe('Controller: AddhomeCtrl', function () {

  // load the controller's module
  beforeEach(module('tp6App'));

  var AddhomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddhomeCtrl = $controller('AddhomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddhomeCtrl.awesomeThings.length).toBe(3);
  });
});
