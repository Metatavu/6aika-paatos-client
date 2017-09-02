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
    define(['ApiClient', 'model/Membership', 'model/Organization'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Membership'), require('./Organization'));
  } else {
    // Browser globals (root is window)
    if (!root.6aikaPaatosClient) {
      root.6aikaPaatosClient = {};
    }
    root.6aikaPaatosClient.Post = factory(root.6aikaPaatosClient.ApiClient, root.6aikaPaatosClient.Membership, root.6aikaPaatosClient.Organization);
  }
}(this, function(ApiClient, Membership, Organization) {
  'use strict';




  /**
   * The Post model module.
   * @module model/Post
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>Post</code>.
   * A position that exists independent of the person holding it
   * @alias module:model/Post
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Post</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Post} obj Optional instance to populate.
   * @return {module:model/Post} The populated <code>Post</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('other_label')) {
        obj['other_label'] = ApiClient.convertToType(data['other_label'], ['String']);
      }
      if (data.hasOwnProperty('organization')) {
        obj['organization'] = Organization.constructFromObject(data['organization']);
      }
      if (data.hasOwnProperty('memberships')) {
        obj['memberships'] = ApiClient.convertToType(data['memberships'], [Membership]);
      }
    }
    return obj;
  }

  /**
   * An alternate label
   * @member {Array.<String>} other_label
   */
  exports.prototype['other_label'] = undefined;
  /**
   * The organization in which the post is held
   * @member {module:model/Organization} organization
   */
  exports.prototype['organization'] = undefined;
  /**
   * The memberships through which people hold the post in the organization
   * @member {Array.<module:model/Membership>} memberships
   */
  exports.prototype['memberships'] = undefined;



  return exports;
}));


