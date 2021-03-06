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
    root.PaatosApiClient.CaseSummary = factory(root.PaatosApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CaseSummary model module.
   * @module model/CaseSummary
   * @version 0.0.6
   */

  /**
   * Constructs a new <code>CaseSummary</code>.
   * Summary of this case. Typically a few sentences.
   * @alias module:model/CaseSummary
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CaseSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CaseSummary} obj Optional instance to populate.
   * @return {module:model/CaseSummary} The populated <code>CaseSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('fi')) {
        obj['fi'] = ApiClient.convertToType(data['fi'], 'String');
      }
      if (data.hasOwnProperty('sv')) {
        obj['sv'] = ApiClient.convertToType(data['sv'], 'String');
      }
    }
    return obj;
  }

  /**
   * Finnish summary
   * @member {String} fi
   */
  exports.prototype['fi'] = undefined;
  /**
   * Swedish summary
   * @member {String} sv
   */
  exports.prototype['sv'] = undefined;



  return exports;
}));


