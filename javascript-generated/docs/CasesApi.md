# 6aikaPaatosClient.CasesApi

All URIs are relative to *https://paatos-test.6aika.fi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionsList**](CasesApi.md#actionsList) | **GET** /action/ | Retrieve a list of actions
[**actionsRetrieve**](CasesApi.md#actionsRetrieve) | **GET** /action/{id}/ | Retrieve a single video by ID
[**casesList**](CasesApi.md#casesList) | **GET** /case/ | Retrieve a list of cases
[**videoDetail**](CasesApi.md#videoDetail) | **GET** /case/{id}/ | Retrieve a single case video by ID


<a name="actionsList"></a>
# **actionsList**
> InlineResponse2001 actionsList(opts)

Retrieve a list of actions

### Example
```javascript
var 6aikaPaatosClient = require('6aika-paatos-client');

var apiInstance = new 6aikaPaatosClient.CasesApi();

var opts = { 
  'limit': 56 // Number | Specify the number of element to display per page.
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

var apiInstance = new 6aikaPaatosClient.CasesApi();

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

<a name="casesList"></a>
# **casesList**
> InlineResponse200 casesList(opts)

Retrieve a list of cases

### Example
```javascript
var 6aikaPaatosClient = require('6aika-paatos-client');

var apiInstance = new 6aikaPaatosClient.CasesApi();

var opts = { 
  'limit': 56 // Number | Specify the number of element to display per page.
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
var 6aikaPaatosClient = require('6aika-paatos-client');

var apiInstance = new 6aikaPaatosClient.CasesApi();

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

