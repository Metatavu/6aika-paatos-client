# PaatosApiClient.FunctionsApi

All URIs are relative to *https://paatos-test.6aika.fi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**functionsList**](FunctionsApi.md#functionsList) | **GET** /function/ | Retrieve a list of functions
[**functionsRetrieve**](FunctionsApi.md#functionsRetrieve) | **GET** /function/{id}/ | Retrieve a single function by ID


<a name="functionsList"></a>
# **functionsList**
> InlineResponse2007 functionsList(opts)

Retrieve a list of functions

### Example
```javascript
var PaatosApiClient = require('paatos-api-client');

var apiInstance = new PaatosApiClient.FunctionsApi();

var opts = { 
  'limit': 56, // Number | Specify the number of element to display per page.
  'offset': 56 // Number | Specify the offset to start displaying element on a page.
};
apiInstance.functionsList(opts).then(function(data) {
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

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="functionsRetrieve"></a>
# **functionsRetrieve**
> ModelFunction functionsRetrieve(id)

Retrieve a single function by ID

### Example
```javascript
var PaatosApiClient = require('paatos-api-client');

var apiInstance = new PaatosApiClient.FunctionsApi();

var id = 56; // Number | Primary key of resource

apiInstance.functionsRetrieve(id).then(function(data) {
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

[**ModelFunction**](ModelFunction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

