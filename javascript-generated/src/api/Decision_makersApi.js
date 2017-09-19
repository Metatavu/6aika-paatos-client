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
    define(['ApiClient', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/Membership', 'model/Organization', 'model/Person', 'model/Post'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse2002'), require('../model/InlineResponse2003'), require('../model/InlineResponse2004'), require('../model/InlineResponse2005'), require('../model/Membership'), require('../model/Organization'), require('../model/Person'), require('../model/Post'));
  } else {
    // Browser globals (root is window)
    if (!root.6aikaPaatosClient) {
      root.6aikaPaatosClient = {};
    }
    root.6aikaPaatosClient.Decision_makersApi = factory(root.6aikaPaatosClient.ApiClient, root.6aikaPaatosClient.InlineResponse2002, root.6aikaPaatosClient.InlineResponse2003, root.6aikaPaatosClient.InlineResponse2004, root.6aikaPaatosClient.InlineResponse2005, root.6aikaPaatosClient.Membership, root.6aikaPaatosClient.Organization, root.6aikaPaatosClient.Person, root.6aikaPaatosClient.Post);
  }
}(this, function(ApiClient, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, Membership, Organization, Person, Post) {
  'use strict';

  /**
   * Decision_makers service.
   * @module api/Decision_makersApi
   * @version 0.0.1
   */

  /**
   * Constructs a new Decision_makersApi. 
   * @alias module:api/Decision_makersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Retrieve a list of memberships
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Specify the number of element to display per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2004} and HTTP response
     */
    this.membershipsListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/membership/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve a list of memberships
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Specify the number of element to display per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    this.membershipsList = function(opts) {
      return this.membershipsListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a single membership record
     * @param {Number} id Primary key of resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Membership} and HTTP response
     */
    this.membershipsRetrieveWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling membershipsRetrieve");
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
      var returnType = Membership;

      return this.apiClient.callApi(
        '/membership/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve a single membership record
     * @param {Number} id Primary key of resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Membership}
     */
    this.membershipsRetrieve = function(id) {
      return this.membershipsRetrieveWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


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


    /**
     * Retrieve a list of persons
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Specify the number of element to display per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2002} and HTTP response
     */
    this.personsListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/person/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve a list of persons
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Specify the number of element to display per page.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    this.personsList = function(opts) {
      return this.personsListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a single person record
     * @param {Number} id Primary key of resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Person} and HTTP response
     */
    this.personsRetrieveWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling personsRetrieve");
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
      var returnType = Person;

      return this.apiClient.callApi(
        '/person/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve a single person record
     * @param {Number} id Primary key of resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Person}
     */
    this.personsRetrieve = function(id) {
      return this.personsRetrieveWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a list of posts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize request that server delivers page_size results in response
     * @param {Number} opts.page request particular page in paginated results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse2005} and HTTP response
     */
    this.postsListWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page_size': opts['pageSize'],
        'page': opts['page']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = InlineResponse2005;

      return this.apiClient.callApi(
        '/post/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve a list of posts
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize request that server delivers page_size results in response
     * @param {Number} opts.page request particular page in paginated results
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */
    this.postsList = function(opts) {
      return this.postsListWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Retrieve a single post record
     * @param {Number} id Primary key of resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Post} and HTTP response
     */
    this.postsRetrieveWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling postsRetrieve");
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
      var returnType = Post;

      return this.apiClient.callApi(
        '/post/{id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve a single post record
     * @param {Number} id Primary key of resource
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Post}
     */
    this.postsRetrieve = function(id) {
      return this.postsRetrieveWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
