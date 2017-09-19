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
   * @version 0.0.1
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

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('other_label')) {
        obj['other_label'] = ApiClient.convertToType(data['other_label'], ['String']);
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
      if (data.hasOwnProperty('organization')) {
        obj['organization'] = Organization.constructFromObject(data['organization']);
      }
      if (data.hasOwnProperty('area_id')) {
        obj['area_id'] = ApiClient.convertToType(data['area_id'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
      }
      if (data.hasOwnProperty('memberships')) {
        obj['memberships'] = ApiClient.convertToType(data['memberships'], [Membership]);
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The post's unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * A label describing the post
   * @member {String} label
   */
  exports.prototype['label'] = undefined;
  /**
   * An alternate label
   * @member {Array.<String>} other_label
   */
  exports.prototype['other_label'] = undefined;
  /**
   * The function that the holder of the post fulfills
   * @member {String} role
   */
  exports.prototype['role'] = undefined;
  /**
   * The organization in which the post is held
   * @member {module:model/Organization} organization
   */
  exports.prototype['organization'] = undefined;
  /**
   * The ID of the geographic area to which this post is related
   * @member {String} area_id
   */
  exports.prototype['area_id'] = undefined;
  /**
   * The date on which the post was created
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * The date on which the post was eliminated
   * @member {Date} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * The memberships through which people hold the post in the organization
   * @member {Array.<module:model/Membership>} memberships
   */
  exports.prototype['memberships'] = undefined;
  /**
   * The time at which the resource was created
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The time at which the resource was last modified
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;



  return exports;
}));

