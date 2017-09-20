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
    define(['ApiClient', 'model/Action'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Action'));
  } else {
    // Browser globals (root is window)
    if (!root.PaatosApiClient) {
      root.PaatosApiClient = {};
    }
    root.PaatosApiClient.InlineResponse2001 = factory(root.PaatosApiClient.ApiClient, root.PaatosApiClient.Action);
  }
}(this, function(ApiClient, Action) {
  'use strict';




  /**
   * The InlineResponse2001 model module.
   * @module model/InlineResponse2001
   * @version 0.0.5
   */

  /**
   * Constructs a new <code>InlineResponse2001</code>.
   * @alias module:model/InlineResponse2001
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>InlineResponse2001</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2001} obj Optional instance to populate.
   * @return {module:model/InlineResponse2001} The populated <code>InlineResponse2001</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('next')) {
        obj['next'] = ApiClient.convertToType(data['next'], 'String');
      }
      if (data.hasOwnProperty('previous')) {
        obj['previous'] = ApiClient.convertToType(data['previous'], 'String');
      }
      if (data.hasOwnProperty('results')) {
        obj['results'] = ApiClient.convertToType(data['results'], [Action]);
      }
    }
    return obj;
  }

  /**
   * Total items count for the all collection
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * Uri of the next page relative to the current page settings.
   * @member {String} next
   */
  exports.prototype['next'] = undefined;
  /**
   * Uri of the previous page relative to the current page settings.
   * @member {String} previous
   */
  exports.prototype['previous'] = undefined;
  /**
   * @member {Array.<module:model/Action>} results
   */
  exports.prototype['results'] = undefined;



  return exports;
}));


