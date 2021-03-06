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
    define(['ApiClient', 'model/Action', 'model/Event', 'model/Organization', 'model/VoteCount'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Action'), require('./Event'), require('./Organization'), require('./VoteCount'));
  } else {
    // Browser globals (root is window)
    if (!root.PaatosApiClient) {
      root.PaatosApiClient = {};
    }
    root.PaatosApiClient.VoteEvent = factory(root.PaatosApiClient.ApiClient, root.PaatosApiClient.Action, root.PaatosApiClient.Event, root.PaatosApiClient.Organization, root.PaatosApiClient.VoteCount);
  }
}(this, function(ApiClient, Action, Event, Organization, VoteCount) {
  'use strict';




  /**
   * The VoteEvent model module.
   * @module model/VoteEvent
   * @version 0.0.7
   */

  /**
   * Constructs a new <code>VoteEvent</code>.
   * An event at which people&#39;s votes are recorded
   * @alias module:model/VoteEvent
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>VoteEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VoteEvent} obj Optional instance to populate.
   * @return {module:model/VoteEvent} The populated <code>VoteEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('organization_id')) {
        obj['organization_id'] = ApiClient.convertToType(data['organization_id'], 'String');
      }
      if (data.hasOwnProperty('organization')) {
        obj['organization'] = Organization.constructFromObject(data['organization']);
      }
      if (data.hasOwnProperty('legislative_session')) {
        obj['legislative_session'] = Event.constructFromObject(data['legislative_session']);
      }
      if (data.hasOwnProperty('identifier')) {
        obj['identifier'] = ApiClient.convertToType(data['identifier'], 'String');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = Action.constructFromObject(data['action']);
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
      }
      if (data.hasOwnProperty('result')) {
        obj['result'] = ApiClient.convertToType(data['result'], 'String');
      }
      if (data.hasOwnProperty('counts')) {
        obj['counts'] = ApiClient.convertToType(data['counts'], [VoteCount]);
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
   * The vote event's unique identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The ID of the organization whose members are voting
   * @member {String} organization_id
   */
  exports.prototype['organization_id'] = undefined;
  /**
   * The organization whose members are voting
   * @member {module:model/Organization} organization
   */
  exports.prototype['organization'] = undefined;
  /**
   * IRI reference to the Event (meeting) where this vote took place
   * @member {module:model/Event} legislative_session
   */
  exports.prototype['legislative_session'] = undefined;
  /**
   * An issued identifier
   * @member {String} identifier
   */
  exports.prototype['identifier'] = undefined;
  /**
   * The action to which this vote_event applies.
   * @member {module:model/Action} action
   */
  exports.prototype['action'] = undefined;
  /**
   * The time at which the event begins
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * The time at which the event ends
   * @member {Date} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * The result of the vote event.
   * @member {String} result
   */
  exports.prototype['result'] = undefined;
  /**
   * The number of votes for options
   * @member {Array.<module:model/VoteCount>} counts
   */
  exports.prototype['counts'] = undefined;
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


