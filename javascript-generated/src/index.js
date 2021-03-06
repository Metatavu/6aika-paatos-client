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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Action', 'model/Area', 'model/Attachment', 'model/Content', 'model/Event', 'model/Geometry', 'model/GeometryGeometry', 'model/InlineResponse200', 'model/InlineResponse2001', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2004', 'model/InlineResponse2005', 'model/InlineResponse2006', 'model/InlineResponse2007', 'model/Membership', 'model/Meta', 'model/ModelCase', 'model/ModelFunction', 'model/Organization', 'model/Person', 'model/Post', 'model/VoteCount', 'model/VoteEvent', 'api/ActionsApi', 'api/CasesApi', 'api/Decision_makersApi', 'api/EventsApi', 'api/FunctionsApi', 'api/MembershipsApi', 'api/OrganizationsApi', 'api/PersonsApi', 'api/PostsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/Action'), require('./model/Area'), require('./model/Attachment'), require('./model/Content'), require('./model/Event'), require('./model/Geometry'), require('./model/GeometryGeometry'), require('./model/InlineResponse200'), require('./model/InlineResponse2001'), require('./model/InlineResponse2002'), require('./model/InlineResponse2003'), require('./model/InlineResponse2004'), require('./model/InlineResponse2005'), require('./model/InlineResponse2006'), require('./model/InlineResponse2007'), require('./model/Membership'), require('./model/Meta'), require('./model/ModelCase'), require('./model/ModelFunction'), require('./model/Organization'), require('./model/Person'), require('./model/Post'), require('./model/VoteCount'), require('./model/VoteEvent'), require('./api/ActionsApi'), require('./api/CasesApi'), require('./api/Decision_makersApi'), require('./api/EventsApi'), require('./api/FunctionsApi'), require('./api/MembershipsApi'), require('./api/OrganizationsApi'), require('./api/PersonsApi'), require('./api/PostsApi'));
  }
}(function(ApiClient, Action, Area, Attachment, Content, Event, Geometry, GeometryGeometry, InlineResponse200, InlineResponse2001, InlineResponse2002, InlineResponse2003, InlineResponse2004, InlineResponse2005, InlineResponse2006, InlineResponse2007, Membership, Meta, ModelCase, ModelFunction, Organization, Person, Post, VoteCount, VoteEvent, ActionsApi, CasesApi, Decision_makersApi, EventsApi, FunctionsApi, MembershipsApi, OrganizationsApi, PersonsApi, PostsApi) {
  'use strict';

  /**
   * API_for_distributing_data_about_decisions_and_people_behind_those_decisions.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var PaatosApiClient = require('index'); // See note below*.
   * var xxxSvc = new PaatosApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new PaatosApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new PaatosApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new PaatosApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.0.7
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The Action model constructor.
     * @property {module:model/Action}
     */
    Action: Action,
    /**
     * The Area model constructor.
     * @property {module:model/Area}
     */
    Area: Area,
    /**
     * The Attachment model constructor.
     * @property {module:model/Attachment}
     */
    Attachment: Attachment,
    /**
     * The Content model constructor.
     * @property {module:model/Content}
     */
    Content: Content,
    /**
     * The Event model constructor.
     * @property {module:model/Event}
     */
    Event: Event,
    /**
     * The Geometry model constructor.
     * @property {module:model/Geometry}
     */
    Geometry: Geometry,
    /**
     * The GeometryGeometry model constructor.
     * @property {module:model/GeometryGeometry}
     */
    GeometryGeometry: GeometryGeometry,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001: InlineResponse2001,
    /**
     * The InlineResponse2002 model constructor.
     * @property {module:model/InlineResponse2002}
     */
    InlineResponse2002: InlineResponse2002,
    /**
     * The InlineResponse2003 model constructor.
     * @property {module:model/InlineResponse2003}
     */
    InlineResponse2003: InlineResponse2003,
    /**
     * The InlineResponse2004 model constructor.
     * @property {module:model/InlineResponse2004}
     */
    InlineResponse2004: InlineResponse2004,
    /**
     * The InlineResponse2005 model constructor.
     * @property {module:model/InlineResponse2005}
     */
    InlineResponse2005: InlineResponse2005,
    /**
     * The InlineResponse2006 model constructor.
     * @property {module:model/InlineResponse2006}
     */
    InlineResponse2006: InlineResponse2006,
    /**
     * The InlineResponse2007 model constructor.
     * @property {module:model/InlineResponse2007}
     */
    InlineResponse2007: InlineResponse2007,
    /**
     * The Membership model constructor.
     * @property {module:model/Membership}
     */
    Membership: Membership,
    /**
     * The Meta model constructor.
     * @property {module:model/Meta}
     */
    Meta: Meta,
    /**
     * The ModelCase model constructor.
     * @property {module:model/ModelCase}
     */
    ModelCase: ModelCase,
    /**
     * The ModelFunction model constructor.
     * @property {module:model/ModelFunction}
     */
    ModelFunction: ModelFunction,
    /**
     * The Organization model constructor.
     * @property {module:model/Organization}
     */
    Organization: Organization,
    /**
     * The Person model constructor.
     * @property {module:model/Person}
     */
    Person: Person,
    /**
     * The Post model constructor.
     * @property {module:model/Post}
     */
    Post: Post,
    /**
     * The VoteCount model constructor.
     * @property {module:model/VoteCount}
     */
    VoteCount: VoteCount,
    /**
     * The VoteEvent model constructor.
     * @property {module:model/VoteEvent}
     */
    VoteEvent: VoteEvent,
    /**
     * The ActionsApi service constructor.
     * @property {module:api/ActionsApi}
     */
    ActionsApi: ActionsApi,
    /**
     * The CasesApi service constructor.
     * @property {module:api/CasesApi}
     */
    CasesApi: CasesApi,
    /**
     * The Decision_makersApi service constructor.
     * @property {module:api/Decision_makersApi}
     */
    Decision_makersApi: Decision_makersApi,
    /**
     * The EventsApi service constructor.
     * @property {module:api/EventsApi}
     */
    EventsApi: EventsApi,
    /**
     * The FunctionsApi service constructor.
     * @property {module:api/FunctionsApi}
     */
    FunctionsApi: FunctionsApi,
    /**
     * The MembershipsApi service constructor.
     * @property {module:api/MembershipsApi}
     */
    MembershipsApi: MembershipsApi,
    /**
     * The OrganizationsApi service constructor.
     * @property {module:api/OrganizationsApi}
     */
    OrganizationsApi: OrganizationsApi,
    /**
     * The PersonsApi service constructor.
     * @property {module:api/PersonsApi}
     */
    PersonsApi: PersonsApi,
    /**
     * The PostsApi service constructor.
     * @property {module:api/PostsApi}
     */
    PostsApi: PostsApi
  };

  return exports;
}));
