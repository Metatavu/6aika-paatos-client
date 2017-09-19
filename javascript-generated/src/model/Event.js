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
    define(['ApiClient', 'model/Organization', 'model/Person'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Organization'), require('./Person'));
  } else {
    // Browser globals (root is window)
    if (!root.6aikaPaatosClient) {
      root.6aikaPaatosClient = {};
    }
    root.6aikaPaatosClient.Event = factory(root.6aikaPaatosClient.ApiClient, root.6aikaPaatosClient.Organization, root.6aikaPaatosClient.Person);
  }
}(this, function(ApiClient, Organization, Person) {
  'use strict';




  /**
   * The Event model module.
   * @module model/Event
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>Event</code>.
   * An occurrence that people may attend
   * @alias module:model/Event
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>Event</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Event} obj Optional instance to populate.
   * @return {module:model/Event} The populated <code>Event</code> instance.
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
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('classification')) {
        obj['classification'] = ApiClient.convertToType(data['classification'], 'String');
      }
      if (data.hasOwnProperty('organization_id')) {
        obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'String');
      }
      if (data.hasOwnProperty('organization')) {
        obj['organization'] = Organization.constructFromObject(data['organization']);
      }
      if (data.hasOwnProperty('attendees')) {
        obj['attendees'] = ApiClient.convertToType(data['attendees'], [Person]);
      }
      if (data.hasOwnProperty('parent_id')) {
        obj['parent_id'] = ApiClient.convertToType(data['parent_id'], 'String');
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
   * The event's unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The event's name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The event's description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The time at which the event starts
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * The time at which the event ends
   * @member {String} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * The event's location
   * @member {String} location
   */
  exports.prototype['location'] = undefined;
  /**
   * The event's status
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The event's category
   * @member {String} classification
   */
  exports.prototype['classification'] = undefined;
  /**
   * The ID of the organization organizing the event
   * @member {String} organization_id
   */
  exports.prototype['organization_id'] = undefined;
  /**
   * The organization organizing the event
   * @member {module:model/Organization} organization
   */
  exports.prototype['organization'] = undefined;
  /**
   * People attending the event
   * @member {Array.<module:model/Person>} attendees
   */
  exports.prototype['attendees'] = undefined;
  /**
   * The ID of an event that this event is a part of
   * @member {String} parent_id
   */
  exports.prototype['parent_id'] = undefined;
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


