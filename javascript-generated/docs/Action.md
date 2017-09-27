# PaatosApiClient.Action

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this action | [optional] 
**title** | **String** | Title of the action | [optional] 
**_case** | [**ModelCase**](ModelCase.md) | Case this action is related to | [optional] 
**ordering** | **Number** | Ordering of this action within a meeting (or possibly arbitrary ordering) | [optional] 
**articleNumber** | **String** | The article number given to this action after decision, will be null before decision | [optional] 
**responsibleParty** | [**Organization**](Organization.md) | The city organization responsible for this decision. If decision is delegated, this is the organization that delegated the authority. | [optional] 
**delegatePost** | [**Post**](Post.md) | If this decision was delegated, this field will be filled and refers to the post that made the decision | [optional] 
**content** | [**Content**](Content.md) |  | [optional] 
**votes** | [**[VoteEvent]**](VoteEvent.md) | Votes taken during this action. | [optional] 


