describe('IndexController', function() {

    var controller;

    beforeEach(function() {
        controller = kiwi.controller.create('IndexController');
    });

    it('Should be able to define the application name;', function() {
        expect(controller.APP_NAME).toEqual('Pture');
    });

});