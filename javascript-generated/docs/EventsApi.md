# PaatosApiClient.EventsApi

All URIs are relative to *https://paatos-test.6aika.fi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventsList**](EventsApi.md#eventsList) | **GET** /event/ | Retrieve a list of events
[**eventsRetrieve**](EventsApi.md#eventsRetrieve) | **GET** /event/{id}/ | Retrieve a single event by ID


<a name="eventsList"></a>
# **eventsList**
> InlineResponse2006 eventsList(opts)

Retrieve a list of events

### Example
```javascript
var PaatosApiClient = require('paatos-api-client');

var apiInstance = new PaatosApiClient.EventsApi();

var opts = { 
  'limit': 56, // Number | Specify the number of element to display per page.
  'offset': 56, // Number | Specify the offset to start displaying element on a page.
  'organization': 56 // Number | Filter by organization id
};
apiInstance.eventsList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Specify the number of element to display per page. | [optional] 
 **offset** | **Number**| Specify the offset to start displaying element on a page. | [optional] 
 **organization** | **Number**| Filter by organization id | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="eventsRetrieve"></a>
# **eventsRetrieve**
> Event eventsRetrieve(id)

Retrieve a single event by ID

### Example
```javascript
var PaatosApiClient = require('paatos-api-client');

var apiInstance = new PaatosApiClient.EventsApi();

var id = 56; // Number | Primary key of resource

apiInstance.eventsRetrieve(id).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| Primary key of resource | 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

