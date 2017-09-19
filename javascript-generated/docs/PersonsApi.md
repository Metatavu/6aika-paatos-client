# PaatosApiClient.PersonsApi

All URIs are relative to *https://paatos-test.6aika.fi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**personsList**](PersonsApi.md#personsList) | **GET** /person/ | Retrieve a list of persons
[**personsRetrieve**](PersonsApi.md#personsRetrieve) | **GET** /person/{id}/ | Retrieve a single person record


<a name="personsList"></a>
# **personsList**
> InlineResponse2002 personsList(opts)

Retrieve a list of persons

### Example
```javascript
var PaatosApiClient = require('paatos-api-client');

var apiInstance = new PaatosApiClient.PersonsApi();

var opts = { 
  'limit': 56 // Number | Specify the number of element to display per page.
};
apiInstance.personsList(opts).then(function(data) {
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

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="personsRetrieve"></a>
# **personsRetrieve**
> Person personsRetrieve(id)

Retrieve a single person record

### Example
```javascript
var PaatosApiClient = require('paatos-api-client');

var apiInstance = new PaatosApiClient.PersonsApi();

var id = 56; // Number | Primary key of resource

apiInstance.personsRetrieve(id).then(function(data) {
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

[**Person**](Person.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

