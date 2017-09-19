# 6aikaPaatosClient.PostsApi

All URIs are relative to *https://paatos-test.6aika.fi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postsList**](PostsApi.md#postsList) | **GET** /post/ | Retrieve a list of posts
[**postsRetrieve**](PostsApi.md#postsRetrieve) | **GET** /post/{id}/ | Retrieve a single post record


<a name="postsList"></a>
# **postsList**
> InlineResponse2005 postsList(opts)

Retrieve a list of posts

### Example
```javascript
var 6aikaPaatosClient = require('6aika-paatos-client');

var apiInstance = new 6aikaPaatosClient.PostsApi();

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

var apiInstance = new 6aikaPaatosClient.PostsApi();

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

