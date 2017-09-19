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
    define(['ApiClient', 'model/Meta', 'model/Person'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Meta'), require('./Person'));
  } else {
    // Browser globals (root is window)
    if (!root.PaatosApiClient) {
      root.PaatosApiClient = {};
    }
    root.PaatosApiClient.InlineResponse2002 = factory(root.PaatosApiClient.ApiClient, root.PaatosApiClient.Meta, root.PaatosApiClient.Person);
  }
}(this, function(ApiClient, Meta, Person) {
  'use strict';




  /**
   * The InlineResponse2002 model module.
   * @module model/InlineResponse2002
   * @version 0.0.4
   */

  /**
   * Constructs a new <code>InlineResponse2002</code>.
   * @alias module:model/InlineResponse2002
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InlineResponse2002</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2002} obj Optional instance to populate.
   * @return {module:model/InlineResponse2002} The populated <code>InlineResponse2002</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('meta')) {
        obj['meta'] = Meta.constructFromObject(data['meta']);
      }
      if (data.hasOwnProperty('objects')) {
        obj['objects'] = ApiClient.convertToType(data['objects'], [Person]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Meta} meta
   */
  exports.prototype['meta'] = undefined;
  /**
   * @member {Array.<module:model/Person>} objects
   */
  exports.prototype['objects'] = undefined;



  return exports;
}));


