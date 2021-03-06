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
    root.PaatosApiClient.ContentHypertext = factory(root.PaatosApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ContentHypertext model module.
   * @module model/ContentHypertext
   * @version 0.0.6
   */

  /**
   * Constructs a new <code>ContentHypertext</code>.
   * Content formatted with pseudo-HTML. Only a very restricted set of tags is allowed. These are: first and second level headings (P+H1+H2) and table (more may be added, but start from a minimal set)
   * @alias module:model/ContentHypertext
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ContentHypertext</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentHypertext} obj Optional instance to populate.
   * @return {module:model/ContentHypertext} The populated <code>ContentHypertext</code> instance.
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
      if (data.hasOwnProperty('en')) {
        obj['en'] = ApiClient.convertToType(data['en'], 'String');
      }
    }
    return obj;
  }

  /**
   * Finnish version of the hypertext
   * @member {String} fi
   */
  exports.prototype['fi'] = undefined;
  /**
   * Swedish version of the hypertext
   * @member {String} sv
   */
  exports.prototype['sv'] = undefined;
  /**
   * English version of the hypertext
   * @member {String} en
   */
  exports.prototype['en'] = undefined;



  return exports;
}));


