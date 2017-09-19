# PaatosApiClient.VoteEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The vote event&#39;s unique identifier | [optional] 
**organizationId** | **String** | The ID of the organization whose members are voting | [optional] 
**organization** | [**Organization**](Organization.md) | The organization whose members are voting | [optional] 
**legislativeSession** | [**Event**](Event.md) | IRI reference to the Event (meeting) where this vote took place | [optional] 
**identifier** | **String** | An issued identifier | [optional] 
**action** | [**Action**](Action.md) | The action to which this vote_event applies. | [optional] 
**startDate** | **Date** | The time at which the event begins | [optional] 
**endDate** | **Date** | The time at which the event ends | [optional] 
**result** | **String** | The result of the vote event. | [optional] 
**counts** | [**[VoteCount]**](VoteCount.md) | The number of votes for options | [optional] 
**createdAt** | **Date** | The time at which the resource was created | [optional] 
**updatedAt** | **Date** | The time at which the resource was last modified | [optional] 


