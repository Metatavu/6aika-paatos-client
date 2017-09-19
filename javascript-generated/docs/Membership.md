# PaatosApiClient.Membership

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The membership&#39;s unique identifier | [optional] 
**label** | **String** | A label describing the membership | [optional] 
**role** | **String** | The role that the member fulfills in the organization | [optional] 
**member** | **Object** | The person or organization that is a member of the organization | [optional] 
**personId** | **String** | The ID of the person who is a member of the organization | [optional] 
**person** | [**Person**](Person.md) | The person who is a member of the organization | [optional] 
**organization** | [**Organization**](Organization.md) | The organization in which the person or organization is a member | [optional] 
**postId** | **String** | The ID of the post held by the member in the organization through this membership | [optional] 
**post** | [**Post**](Post.md) | The post held by the member in the organization through this membership | [optional] 
**onBehalfOf** | [**Organization**](Organization.md) | The organization on whose behalf the person is a member of the organization | [optional] 
**startDate** | **Date** | The date on which the relationship began | [optional] 
**endDate** | **Date** | The date on which the relationship ended | [optional] 
**createdAt** | **Date** | The time at which the resource was created | [optional] 
**updatedAt** | **Date** | The time at which the resource was last modified | [optional] 


