# PaatosApiClient.MembershipsApi

All URIs are relative to *https://paatos-test.6aika.fi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**membershipsList**](MembershipsApi.md#membershipsList) | **GET** /membership/ | Retrieve a list of memberships
[**membershipsRetrieve**](MembershipsApi.md#membershipsRetrieve) | **GET** /membership/{id}/ | Retrieve a single membership record


<a name="membershipsList"></a>
# **membershipsList**
> InlineResponse2004 membershipsList(opts)

Retrieve a list of memberships

### Example
```javascript
var PaatosApiClient = require('paatos-api-client');

var apiInstance = new PaatosApiClient.MembershipsApi();

var opts = { 
  'limit': 56 // Number | Specify the number of element to display per page.
};
apiInstance.membershipsList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| Specify the number of element to display per page. | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="membershipsRetrieve"></a>
# **membershipsRetrieve**
> Membership membershipsRetrieve(id)

Retrieve a single membership record

### Example
```javascript
var PaatosApiClient = require('paatos-api-client');

var apiInstance = new PaatosApiClient.MembershipsApi();

var id = 56; // Number | Primary key of resource

apiInstance.membershipsRetrieve(id).then(function(data) {
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

[**Membership**](Membership.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

