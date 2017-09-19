# 6aikaPaatosClient.ActionsApi

All URIs are relative to *https://paatos-test.6aika.fi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionsList**](ActionsApi.md#actionsList) | **GET** /action/ | Retrieve a list of actions
[**actionsRetrieve**](ActionsApi.md#actionsRetrieve) | **GET** /action/{id}/ | Retrieve a single video by ID


<a name="actionsList"></a>
# **actionsList**
> InlineResponse2001 actionsList(opts)

Retrieve a list of actions

### Example
```javascript
var 6aikaPaatosClient = require('6aika-paatos-client');

var apiInstance = new 6aikaPaatosClient.ActionsApi();

var opts = { 
  'limit': 56, // Number | Specify the number of element to display per page.
  'offset': 56 // Number | Specify the offset to start displaying element on a page.
};
apiInstance.actionsList(opts).then(function(data) {
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

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionsRetrieve"></a>
# **actionsRetrieve**
> Action actionsRetrieve(id)

Retrieve a single video by ID

### Example
```javascript
var 6aikaPaatosClient = require('6aika-paatos-client');

var apiInstance = new 6aikaPaatosClient.ActionsApi();

var id = 56; // Number | Primary key of resource

apiInstance.actionsRetrieve(id).then(function(data) {
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

[**Action**](Action.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

