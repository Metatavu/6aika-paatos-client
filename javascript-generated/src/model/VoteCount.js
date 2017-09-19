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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.6aikaPaatosClient) {
      root.6aikaPaatosClient = {};
    }
    root.6aikaPaatosClient.VoteCount = factory(root.6aikaPaatosClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VoteCount model module.
   * @module model/VoteCount
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>VoteCount</code>.
   * The number of votes for an option in a vote event
   * @alias module:model/VoteCount
   * @class
   * @param option {String} An option in a vote event
   * @param value {Number} The number of votes for an option
   */
  var exports = function(option, value) {
    var _this = this;

    _this['option'] = option;
    _this['value'] = value;


  };

  /**
   * Constructs a <code>VoteCount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoteCount} obj Optional instance to populate.
   * @return {module:model/VoteCount} The populated <code>VoteCount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('option')) {
        obj['option'] = ApiClient.convertToType(data['option'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'String');
      }
      if (data.hasOwnProperty('group')) {
        obj['group'] = ApiClient.convertToType(data['group'], Object);
      }
    }
    return obj;
  }

  /**
   * An option in a vote event
   * @member {String} option
   */
  exports.prototype['option'] = undefined;
  /**
   * The number of votes for an option
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;
  /**
   * The ID of a group of voters
   * @member {String} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * A group of voters
   * @member {Object} group
   */
  exports.prototype['group'] = undefined;



  return exports;
}));

