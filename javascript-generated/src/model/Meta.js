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
    if (!root.PaatosApiClient) {
      root.PaatosApiClient = {};
    }
    root.PaatosApiClient.Meta = factory(root.PaatosApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Meta model module.
   * @module model/Meta
   * @version 0.0.7
   */

  /**
   * Constructs a new <code>Meta</code>.
   * Meta structure for controlling pagination
   * @alias module:model/Meta
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Meta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Meta} obj Optional instance to populate.
   * @return {module:model/Meta} The populated <code>Meta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('previous')) {
        obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
      }
      if (data.hasOwnProperty('total_count')) {
        obj['total_count'] = ApiClient.convertToType(data['total_count'], 'Number');
      }
      if (data.hasOwnProperty('offset')) {
        obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Number');
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = ApiClient.convertToType(data['next'], 'String');
      }
    }
    return obj;
  }

  /**
   * Uri of the previous page relative to the current page settings.
   * @member {String} previous
   */
  exports.prototype['previous'] = undefined;
  /**
   * Total items count for the all collection
   * @member {Number} total_count
   */
  exports.prototype['total_count'] = undefined;
  /**
   * Specify the offset to start displaying element on a page.
   * @member {Number} offset
   */
  exports.prototype['offset'] = undefined;
  /**
   * Specify the number of element to display per page.
   * @member {Number} limit
   */
  exports.prototype['limit'] = undefined;
  /**
   * Uri of the next page relative to the current page settings.
   * @member {String} next
   */
  exports.prototype['next'] = undefined;



  return exports;
}));


