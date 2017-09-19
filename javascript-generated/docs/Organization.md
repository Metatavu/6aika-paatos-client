# 6aikaPaatosClient.Organization

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The organization&#39;s unique identifier | [optional] 
**name** | **String** | A primary name, e.g. a legally recognized name | [optional] 
**classification** | **String** | An organization category, e.g. committee | [optional] 
**parentId** | **String** | The ID of the organization that contains this organization | [optional] 
**parent** | [**Organization**](Organization.md) | The organization that contains this organization | [optional] 
**area** | [**Area**](Area.md) | The geographic area to which this organization is related | [optional] 
**_abstract** | **String** | A one-line description of an organization | [optional] 
**description** | **String** | An extended description of an organization | [optional] 
**foundingDate** | **Date** | A date of founding | [optional] 
**dissolutionDate** | **Date** | A date of dissolution | [optional] 
**image** | **String** | A URL of an image | [optional] 
**memberships** | [**[Membership]**](Membership.md) | The memberships of the members of the organization and of the organization itself | [optional] 
**posts** | [**[Post]**](Post.md) | Posts within the organization | [optional] 
**voteEvents** | [**[VoteEvent]**](VoteEvent.md) | Vote events in which members of the organization are voting | [optional] 
**children** | [**[Organization]**](Organization.md) | The sub-organizations of the organization | [optional] 
**createdAt** | **Date** | The time at which the resource was created | [optional] 
**updatedAt** | **Date** | The time at which the resource was last modified | [optional] 


