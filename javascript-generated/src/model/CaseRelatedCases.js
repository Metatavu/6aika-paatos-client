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
    define(['ApiClient', 'model/ModelCase'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ModelCase'));
  } else {
    // Browser globals (root is window)
    if (!root.PaatosApiClient) {
      root.PaatosApiClient = {};
    }
    root.PaatosApiClient.CaseRelatedCases = factory(root.PaatosApiClient.ApiClient, root.PaatosApiClient.ModelCase);
  }
}(this, function(ApiClient, ModelCase) {
  'use strict';




  /**
   * The CaseRelatedCases model module.
   * @module model/CaseRelatedCases
   * @version 0.0.6
   */

  /**
   * Constructs a new <code>CaseRelatedCases</code>.
   * @alias module:model/CaseRelatedCases
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CaseRelatedCases</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CaseRelatedCases} obj Optional instance to populate.
   * @return {module:model/CaseRelatedCases} The populated <code>CaseRelatedCases</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('case')) {
        obj['case'] = ModelCase.constructFromObject(data['case']);
      }
      if (data.hasOwnProperty('relation_type')) {
        obj['relation_type'] = ApiClient.convertToType(data['relation_type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ModelCase} case
   */
  exports.prototype['case'] = undefined;
  /**
   * Type of this relation (previous, similar etc.)
   * @member {String} relation_type
   */
  exports.prototype['relation_type'] = undefined;



  return exports;
}));


