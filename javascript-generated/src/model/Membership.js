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
    define(['ApiClient', 'model/Organization', 'model/Person', 'model/Post'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Organization'), require('./Person'), require('./Post'));
  } else {
    // Browser globals (root is window)
    if (!root.6aikaPaatosClient) {
      root.6aikaPaatosClient = {};
    }
    root.6aikaPaatosClient.Membership = factory(root.6aikaPaatosClient.ApiClient, root.6aikaPaatosClient.Organization, root.6aikaPaatosClient.Person, root.6aikaPaatosClient.Post);
  }
}(this, function(ApiClient, Organization, Person, Post) {
  'use strict';




  /**
   * The Membership model module.
   * @module model/Membership
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>Membership</code>.
   * A relationship between a member and an organization
   * @alias module:model/Membership
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Membership</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Membership} obj Optional instance to populate.
   * @return {module:model/Membership} The populated <code>Membership</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('person')) {
        obj['person'] = Person.constructFromObject(data['person']);
      }
      if (data.hasOwnProperty('organization')) {
        obj['organization'] = Organization.constructFromObject(data['organization']);
      }
      if (data.hasOwnProperty('post')) {
        obj['post'] = Post.constructFromObject(data['post']);
      }
      if (data.hasOwnProperty('on_behalf_of')) {
        obj['on_behalf_of'] = Organization.constructFromObject(data['on_behalf_of']);
      }
    }
    return obj;
  }

  /**
   * The person who is a member of the organization
   * @member {module:model/Person} person
   */
  exports.prototype['person'] = undefined;
  /**
   * The organization in which the person or organization is a member
   * @member {module:model/Organization} organization
   */
  exports.prototype['organization'] = undefined;
  /**
   * The post held by the member in the organization through this membership
   * @member {module:model/Post} post
   */
  exports.prototype['post'] = undefined;
  /**
   * The organization on whose behalf the person is a member of the organization
   * @member {module:model/Organization} on_behalf_of
   */
  exports.prototype['on_behalf_of'] = undefined;



  return exports;
}));


