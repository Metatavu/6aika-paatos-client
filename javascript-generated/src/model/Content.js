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
    define(['ApiClient', 'model/ContentHypertext'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentHypertext'));
  } else {
    // Browser globals (root is window)
    if (!root.PaatosApiClient) {
      root.PaatosApiClient = {};
    }
    root.PaatosApiClient.Content = factory(root.PaatosApiClient.ApiClient, root.PaatosApiClient.ContentHypertext);
  }
}(this, function(ApiClient, ContentHypertext) {
  'use strict';




  /**
   * The Content model module.
   * @module model/Content
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>Content</code>.
   * Content objects contain the text describing actions takens on cases and the cases themselves. They consist of metadata and the actual content as HTML-formatted text.
   * @alias module:model/Content
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Content</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Content} obj Optional instance to populate.
   * @return {module:model/Content} The populated <code>Content</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('ordering')) {
        obj['ordering'] = ApiClient.convertToType(data['ordering'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('hypertext')) {
        obj['hypertext'] = ContentHypertext.constructFromObject(data['hypertext']);
      }
    }
    return obj;
  }

  /**
   * Unique identifier for this piece of content. Formatted as IRI, composed of semantic namespace prefix and the identifier itself at end.
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Ordering of this content within the larger context
   * @member {Number} ordering
   */
  exports.prototype['ordering'] = undefined;
  /**
   * Title for this content
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * Type of this content (options include: decision, proposal, proceedings...)
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/ContentHypertext} hypertext
   */
  exports.prototype['hypertext'] = undefined;



  return exports;
}));


