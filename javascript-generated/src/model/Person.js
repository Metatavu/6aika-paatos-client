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
    define(['ApiClient', 'model/Membership'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Membership'));
  } else {
    // Browser globals (root is window)
    if (!root.PaatosApiClient) {
      root.PaatosApiClient = {};
    }
    root.PaatosApiClient.Person = factory(root.PaatosApiClient.ApiClient, root.PaatosApiClient.Membership);
  }
}(this, function(ApiClient, Membership) {
  'use strict';




  /**
   * The Person model module.
   * @module model/Person
   * @version 0.0.4
   */

  /**
   * Constructs a new <code>Person</code>.
   * A real person, alive or dead
   * @alias module:model/Person
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>Person</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Person} obj Optional instance to populate.
   * @return {module:model/Person} The populated <code>Person</code> instance.
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
      if (data.hasOwnProperty('family_name')) {
        obj['family_name'] = ApiClient.convertToType(data['family_name'], 'String');
      }
      if (data.hasOwnProperty('given_name')) {
        obj['given_name'] = ApiClient.convertToType(data['given_name'], 'String');
      }
      if (data.hasOwnProperty('additional_name')) {
        obj['additional_name'] = ApiClient.convertToType(data['additional_name'], 'String');
      }
      if (data.hasOwnProperty('honorific_prefix')) {
        obj['honorific_prefix'] = ApiClient.convertToType(data['honorific_prefix'], 'String');
      }
      if (data.hasOwnProperty('honorific_suffix')) {
        obj['honorific_suffix'] = ApiClient.convertToType(data['honorific_suffix'], 'String');
      }
      if (data.hasOwnProperty('patronymic_name')) {
        obj['patronymic_name'] = ApiClient.convertToType(data['patronymic_name'], 'String');
      }
      if (data.hasOwnProperty('sort_name')) {
        obj['sort_name'] = ApiClient.convertToType(data['sort_name'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
      if (data.hasOwnProperty('birth_date')) {
        obj['birth_date'] = ApiClient.convertToType(data['birth_date'], 'Date');
      }
      if (data.hasOwnProperty('death_date')) {
        obj['death_date'] = ApiClient.convertToType(data['death_date'], 'Date');
      }
      if (data.hasOwnProperty('image')) {
        obj['image'] = ApiClient.convertToType(data['image'], 'String');
      }
      if (data.hasOwnProperty('summary')) {
        obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
      }
      if (data.hasOwnProperty('biography')) {
        obj['biography'] = ApiClient.convertToType(data['biography'], 'String');
      }
      if (data.hasOwnProperty('national_identity')) {
        obj['national_identity'] = ApiClient.convertToType(data['national_identity'], 'String');
      }
      if (data.hasOwnProperty('memberships')) {
        obj['memberships'] = ApiClient.convertToType(data['memberships'], [Membership]);
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
   * The person's unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * A person's preferred full name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * One or more family names
   * @member {String} family_name
   */
  exports.prototype['family_name'] = undefined;
  /**
   * One or more primary given names
   * @member {String} given_name
   */
  exports.prototype['given_name'] = undefined;
  /**
   * One or more secondary given names
   * @member {String} additional_name
   */
  exports.prototype['additional_name'] = undefined;
  /**
   * One or more honorifics preceding a person's name
   * @member {String} honorific_prefix
   */
  exports.prototype['honorific_prefix'] = undefined;
  /**
   * One or more honorifics following a person's name
   * @member {String} honorific_suffix
   */
  exports.prototype['honorific_suffix'] = undefined;
  /**
   * One or more patronymic names
   * @member {String} patronymic_name
   */
  exports.prototype['patronymic_name'] = undefined;
  /**
   * A name to use in a lexicographically ordered list
   * @member {String} sort_name
   */
  exports.prototype['sort_name'] = undefined;
  /**
   * A preferred email address
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * A gender
   * @member {String} gender
   */
  exports.prototype['gender'] = undefined;
  /**
   * A date of birth
   * @member {Date} birth_date
   */
  exports.prototype['birth_date'] = undefined;
  /**
   * A date of death
   * @member {Date} death_date
   */
  exports.prototype['death_date'] = undefined;
  /**
   * A URL of a head shot
   * @member {String} image
   */
  exports.prototype['image'] = undefined;
  /**
   * A one-line account of a person's life
   * @member {String} summary
   */
  exports.prototype['summary'] = undefined;
  /**
   * An extended account of a person's life
   * @member {String} biography
   */
  exports.prototype['biography'] = undefined;
  /**
   * A national identity
   * @member {String} national_identity
   */
  exports.prototype['national_identity'] = undefined;
  /**
   * The person's memberships
   * @member {Array.<module:model/Membership>} memberships
   */
  exports.prototype['memberships'] = undefined;
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


