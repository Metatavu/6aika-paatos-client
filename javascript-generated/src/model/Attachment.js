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
    root.6aikaPaatosClient.Attachment = factory(root.6aikaPaatosClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Attachment model module.
   * @module model/Attachment
   * @version 0.0.0
   */

  /**
   * Constructs a new <code>Attachment</code>.
   * Both actions and cases can have related attachments. Usually, the attachments are accumulated in the case and also referenced in the action that attached them to the case.
   * @alias module:model/Attachment
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Attachment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Attachment} obj Optional instance to populate.
   * @return {module:model/Attachment} The populated <code>Attachment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('file')) {
        obj['file'] = ApiClient.convertToType(data['file'], 'String');
      }
    }
    return obj;
  }

  /**
   * Unique identifier for this attachment. Formatted as IRI, composed of semantic namespace prefix and the identifier itself at end.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * URL pointing the attached file
   * @member {String} file
   */
  exports.prototype['file'] = undefined;



  return exports;
}));


