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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse2003', 'model/Organization'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2003'), require('../model/Organization'));
  } else {
    // Browser globals (root is window)
    if (!root.6aikaPaatosClient) {
      root.6aikaPaatosClient = {};
    }
    root.6aikaPaatosClient.OrganizationsApi = factory(root.6aikaPaatosClient.ApiClient, root.6aikaPaatosClient.InlineResponse2003, root.6aikaPaatosClient.Organization);
  }
}(this, function(ApiClient, InlineResponse2003, Organization) {
  'use strict';

  /**
   * Organizations service.
   * @module api/OrganizationsApi
   * @version 0.0.1
   */

  /**
   * Constructs a new OrganizationsApi. 
   * @alias module:api/OrganizationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Retrieve a list of organizations
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Specify the number of element to display per page.
     * @param {Number} opts.offset Specify the offset to start displaying element on a page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2003} and HTTP response
     */
    this.organizationsListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/organization/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve a list of organizations
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Specify the number of element to display per page.
     * @param {Number} opts.offset Specify the offset to start displaying element on a page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2003}
     */
    this.organizationsList = function(opts) {
      return this.organizationsListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a single person record
     * @param {Number} id Primary key of resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Organization} and HTTP response
     */
    this.organizationsRetrieveWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling organizationsRetrieve");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Organization;

      return this.apiClient.callApi(
        '/organization/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve a single person record
     * @param {Number} id Primary key of resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Organization}
     */
    this.organizationsRetrieve = function(id) {
      return this.organizationsRetrieveWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
