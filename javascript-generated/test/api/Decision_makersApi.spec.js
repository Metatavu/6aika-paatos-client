/**
 * Open Decisions API
 * API for distributing data about decisions and people behind those decisions
 *
 * OpenAPI spec version: 0.0.5
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.6aikaPaatosClient);
  }
}(this, function(expect, 6aikaPaatosClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new 6aikaPaatosClient.Decision_makersApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Decision_makersApi', function() {
    describe('membershipsList', function() {
      it('should call membershipsList successfully', function(done) {
        //uncomment below and update the code to test membershipsList
        //instance.membershipsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('membershipsRetrieve', function() {
      it('should call membershipsRetrieve successfully', function(done) {
        //uncomment below and update the code to test membershipsRetrieve
        //instance.membershipsRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organizationsList', function() {
      it('should call organizationsList successfully', function(done) {
        //uncomment below and update the code to test organizationsList
        //instance.organizationsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('organizationsRetrieve', function() {
      it('should call organizationsRetrieve successfully', function(done) {
        //uncomment below and update the code to test organizationsRetrieve
        //instance.organizationsRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('personsList', function() {
      it('should call personsList successfully', function(done) {
        //uncomment below and update the code to test personsList
        //instance.personsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('personsRetrieve', function() {
      it('should call personsRetrieve successfully', function(done) {
        //uncomment below and update the code to test personsRetrieve
        //instance.personsRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postsList', function() {
      it('should call postsList successfully', function(done) {
        //uncomment below and update the code to test postsList
        //instance.postsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postsRetrieve', function() {
      it('should call postsRetrieve successfully', function(done) {
        //uncomment below and update the code to test postsRetrieve
        //instance.postsRetrieve(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
