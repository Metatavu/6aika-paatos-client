# PaatosApiClient.CasesApi

All URIs are relative to *https://paatos-test.6aika.fi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**casesList**](CasesApi.md#casesList) | **GET** /case/ | Retrieve a list of cases
[**videoDetail**](CasesApi.md#videoDetail) | **GET** /case/{id}/ | Retrieve a single case video by ID


<a name="casesList"></a>
# **casesList**
> InlineResponse200 casesList(opts)

Retrieve a list of cases

### Example
```javascript
var PaatosApiClient = require('paatos-api-client');

var apiInstance = new PaatosApiClient.CasesApi();

var opts = { 
  'limit': 56, // Number | Specify the number of element to display per page.
  'offset': 56 // Number | Specify the offset to start displaying element on a page.
};
apiInstance.casesList(opts).then(function(data) {
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

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="videoDetail"></a>
# **videoDetail**
> ModelCase videoDetail(id)

Retrieve a single case video by ID

### Example
```javascript
var PaatosApiClient = require('paatos-api-client');

var apiInstance = new PaatosApiClient.CasesApi();

var id = 56; // Number | Primary key of resource

apiInstance.videoDetail(id).then(function(data) {
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

[**ModelCase**](ModelCase.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

