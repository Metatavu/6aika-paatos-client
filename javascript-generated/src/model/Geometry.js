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
    define(['ApiClient', 'model/GeometryGeometry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GeometryGeometry'));
  } else {
    // Browser globals (root is window)
    if (!root.PaatosApiClient) {
      root.PaatosApiClient = {};
    }
    root.PaatosApiClient.Geometry = factory(root.PaatosApiClient.ApiClient, root.PaatosApiClient.GeometryGeometry);
  }
}(this, function(ApiClient, GeometryGeometry) {
  'use strict';




  /**
   * The Geometry model module.
   * @module model/Geometry
   * @version 0.0.7
   */

  /**
   * Constructs a new <code>Geometry</code>.
   * Single geometry object
   * @alias module:model/Geometry
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Geometry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Geometry} obj Optional instance to populate.
   * @return {module:model/Geometry} The populated <code>Geometry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('data_source')) {
        obj['data_source'] = ApiClient.convertToType(data['data_source'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('modified_at')) {
        obj['modified_at'] = ApiClient.convertToType(data['modified_at'], 'Date');
      }
      if (data.hasOwnProperty('origin_id')) {
        obj['origin_id'] = ApiClient.convertToType(data['origin_id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('geometry')) {
        obj['geometry'] = GeometryGeometry.constructFromObject(data['geometry']);
      }
    }
    return obj;
  }

  /**
   * The geometry's data source
   * @member {String} data_source
   */
  exports.prototype['data_source'] = undefined;
  /**
   * The time at which the resource was created
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The time at which the resource was last modified
   * @member {Date} modified_at
   */
  exports.prototype['modified_at'] = undefined;
  /**
   * The geometry's origin id
   * @member {String} origin_id
   */
  exports.prototype['origin_id'] = undefined;
  /**
   * The geometry's name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The geometry's type
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {module:model/GeometryGeometry} geometry
   */
  exports.prototype['geometry'] = undefined;



  return exports;
}));


