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
    define(['ApiClient', 'model/Membership', 'model/Meta'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Membership'), require('./Meta'));
  } else {
    // Browser globals (root is window)
    if (!root.PaatosApiClient) {
      root.PaatosApiClient = {};
    }
    root.PaatosApiClient.InlineResponse2004 = factory(root.PaatosApiClient.ApiClient, root.PaatosApiClient.Membership, root.PaatosApiClient.Meta);
  }
}(this, function(ApiClient, Membership, Meta) {
  'use strict';




  /**
   * The InlineResponse2004 model module.
   * @module model/InlineResponse2004
   * @version 0.0.7
   */

  /**
   * Constructs a new <code>InlineResponse2004</code>.
   * @alias module:model/InlineResponse2004
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse2004</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2004} obj Optional instance to populate.
   * @return {module:model/InlineResponse2004} The populated <code>InlineResponse2004</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('meta')) {
        obj['meta'] = Meta.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('objects')) {
        obj['objects'] = ApiClient.convertToType(data['objects'], [Membership]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Meta} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {Array.<module:model/Membership>} objects
   */
  exports.prototype['objects'] = undefined;



  return exports;
}));


