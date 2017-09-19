# 6aikaPaatosClient.Decision_makersApi

All URIs are relative to *https://paatos-test.6aika.fi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**membershipsList**](Decision_makersApi.md#membershipsList) | **GET** /membership/ | Retrieve a list of memberships
[**membershipsRetrieve**](Decision_makersApi.md#membershipsRetrieve) | **GET** /membership/{id}/ | Retrieve a single membership record
[**organizationsList**](Decision_makersApi.md#organizationsList) | **GET** /organization/ | Retrieve a list of organizations
[**organizationsRetrieve**](Decision_makersApi.md#organizationsRetrieve) | **GET** /organization/{id}/ | Retrieve a single person record
[**personsList**](Decision_makersApi.md#personsList) | **GET** /person/ | Retrieve a list of persons
[**personsRetrieve**](Decision_makersApi.md#personsRetrieve) | **GET** /person/{id}/ | Retrieve a single person record
[**postsList**](Decision_makersApi.md#postsList) | **GET** /post/ | Retrieve a list of posts
[**postsRetrieve**](Decision_makersApi.md#postsRetrieve) | **GET** /post/{id}/ | Retrieve a single post record


<a name="membershipsList"></a>
# **membershipsList**
> InlineResponse2004 membershipsList(opts)

Retrieve a list of memberships

### Example
```javascript
var 6aikaPaatosClient = require('6aika-paatos-client');

var apiInstance = new 6aikaPaatosClient.Decision_makersApi();

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
var 6aikaPaatosClient = require('6aika-paatos-client');

var apiInstance = new 6aikaPaatosClient.Decision_makersApi();

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

<a name="organizationsList"></a>
# **organizationsList**
> InlineResponse2003 organizationsList(opts)

Retrieve a list of organizations

### Example
```javascript
var 6aikaPaatosClient = require('6aika-paatos-client');

var apiInstance = new 6aikaPaatosClient.Decision_makersApi();

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
var 6aikaPaatosClient = require('6aika-paatos-client');

var apiInstance = new 6aikaPaatosClient.Decision_makersApi();

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

<a name="personsList"></a>
# **personsList**
> InlineResponse2002 personsList(opts)

Retrieve a list of persons

### Example
```javascript
var 6aikaPaatosClient = require('6aika-paatos-client');

var apiInstance = new 6aikaPaatosClient.Decision_makersApi();

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
var 6aikaPaatosClient = require('6aika-paatos-client');

var apiInstance = new 6aikaPaatosClient.Decision_makersApi();

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

<a name="postsList"></a>
# **postsList**
> InlineResponse2005 postsList(opts)

Retrieve a list of posts

### Example
```javascript
var 6aikaPaatosClient = require('6aika-paatos-client');

var apiInstance = new 6aikaPaatosClient.Decision_makersApi();

var opts = { 
  'pageSize': 56, // Number | request that server delivers page_size results in response
  'page': 56 // Number | request particular page in paginated results
};
apiInstance.postsList(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | **Number**| request that server delivers page_size results in response | [optional] 
 **page** | **Number**| request particular page in paginated results | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="postsRetrieve"></a>
# **postsRetrieve**
> Post postsRetrieve(id)

Retrieve a single post record

### Example
```javascript
var 6aikaPaatosClient = require('6aika-paatos-client');

var apiInstance = new 6aikaPaatosClient.Decision_makersApi();

var id = 56; // Number | Primary key of resource

apiInstance.postsRetrieve(id).then(function(data) {
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

[**Post**](Post.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

