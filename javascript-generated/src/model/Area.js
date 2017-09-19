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
    define(['ApiClient', 'model/Area'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Area'));
  } else {
    // Browser globals (root is window)
    if (!root.6aikaPaatosClient) {
      root.6aikaPaatosClient = {};
    }
    root.6aikaPaatosClient.Area = factory(root.6aikaPaatosClient.ApiClient, root.6aikaPaatosClient.Area);
  }
}(this, function(ApiClient, Area) {
  'use strict';




  /**
   * The Area model module.
   * @module model/Area
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Area</code>.
   * A geographic area whose geometry may change over time
   * @alias module:model/Area
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Area</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Area} obj Optional instance to populate.
   * @return {module:model/Area} The populated <code>Area</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('identifier')) {
        obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
      }
      if (data.hasOwnProperty('classification')) {
        obj['classification'] = ApiClient.convertToType(data['classification'], 'String');
      }
      if (data.hasOwnProperty('parent_id')) {
        obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'String');
      }
      if (data.hasOwnProperty('parent')) {
        obj['parent'] = Area.constructFromObject(data['parent']);
      }
      if (data.hasOwnProperty('geometry')) {
        obj['geometry'] = ApiClient.convertToType(data['geometry'], Object);
      }
      if (data.hasOwnProperty('children')) {
        obj['children'] = ApiClient.convertToType(data['children'], [Area]);
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
    }
    return obj;
  }

  /**
   * The area's unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * A primary name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * An issued identifier
   * @member {String} identifier
   */
  exports.prototype['identifier'] = undefined;
  /**
   * An area category, e.g. city
   * @member {String} classification
   */
  exports.prototype['classification'] = undefined;
  /**
   * The ID of the area that contains this area
   * @member {String} parent_id
   */
  exports.prototype['parent_id'] = undefined;
  /**
   * The area that contains this area
   * @member {module:model/Area} parent
   */
  exports.prototype['parent'] = undefined;
  /**
   * A geometry
   * @member {Object} geometry
   */
  exports.prototype['geometry'] = undefined;
  /**
   * The sub-areas of the area
   * @member {Array.<module:model/Area>} children
   */
  exports.prototype['children'] = undefined;
  /**
   * The time at which the resource was created
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The time at which the resource was last modified
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;



  return exports;
}));

