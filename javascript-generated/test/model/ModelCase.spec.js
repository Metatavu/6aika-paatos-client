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
    instance = new 6aikaPaatosClient.ModelCase();
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

  describe('ModelCase', function() {
    it('should create an instance of ModelCase', function() {
      // uncomment below and update the code to test ModelCase
      //var instane = new 6aikaPaatosClient.ModelCase();
      //expect(instance).to.be.a(6aikaPaatosClient.ModelCase);
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new 6aikaPaatosClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new 6aikaPaatosClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property attachments (base name: "attachments")', function() {
      // uncomment below and update the code to test the property attachments
      //var instane = new 6aikaPaatosClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new 6aikaPaatosClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property area (base name: "area")', function() {
      // uncomment below and update the code to test the property area
      //var instane = new 6aikaPaatosClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property district (base name: "district")', function() {
      // uncomment below and update the code to test the property district
      //var instane = new 6aikaPaatosClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property categoryId (base name: "category_id")', function() {
      // uncomment below and update the code to test the property categoryId
      //var instane = new 6aikaPaatosClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property relatedCases (base name: "related_cases")', function() {
      // uncomment below and update the code to test the property relatedCases
      //var instane = new 6aikaPaatosClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property originator (base name: "originator")', function() {
      // uncomment below and update the code to test the property originator
      //var instane = new 6aikaPaatosClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creation_date")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instane = new 6aikaPaatosClient.ModelCase();
      //expect(instance).to.be();
    });

    it('should have the property _public (base name: "public")', function() {
      // uncomment below and update the code to test the property _public
      //var instane = new 6aikaPaatosClient.ModelCase();
      //expect(instance).to.be();
    });

  });

}));
