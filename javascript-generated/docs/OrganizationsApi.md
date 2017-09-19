# PaatosApiClient.OrganizationsApi

All URIs are relative to *https://paatos-test.6aika.fi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**organizationsList**](OrganizationsApi.md#organizationsList) | **GET** /organization/ | Retrieve a list of organizations
[**organizationsRetrieve**](OrganizationsApi.md#organizationsRetrieve) | **GET** /organization/{id}/ | Retrieve a single person record


<a name="organizationsList"></a>
# **organizationsList**
> InlineResponse2003 organizationsList(opts)

Retrieve a list of organizations

### Example
```javascript
var PaatosApiClient = require('paatos-api-client');

var apiInstance = new PaatosApiClient.OrganizationsApi();

var opts = { 
  'limit': 56, // Number | Specify the number of element to display per page.
  'offset': 56 // Number | Specify the offset to start displaying element on a page.
};
apiInstance.organizationsList(opts).then(function(data) {
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

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="organizationsRetrieve"></a>
# **organizationsRetrieve**
> Organization organizationsRetrieve(id)

Retrieve a single person record

### Example
```javascript
var PaatosApiClient = require('paatos-api-client');

var apiInstance = new PaatosApiClient.OrganizationsApi();

var id = 56; // Number | Primary key of resource

apiInstance.organizationsRetrieve(id).then(function(data) {
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

[**Organization**](Organization.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

