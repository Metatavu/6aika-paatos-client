# PaatosApiClient.Action

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Unique identifier for this action | [optional] 
**originId** | **String** | Origin id of the action | [optional] 
**dataSource** | **String** | Data source of the action | [optional] 
**url** | **String** | Url of the action | [optional] 
**resolution** | **String** | resolution | [optional] 
**title** | **String** | Title of the action | [optional] 
**_case** | **String** | Url of case this action is related to | [optional] 
**event** | **String** | Url of event this action is related to | [optional] 
**ordering** | **Number** | Ordering of this action within a meeting (or possibly arbitrary ordering) | [optional] 
**articleNumber** | **String** | The article number given to this action after decision, will be null before decision | [optional] 
**responsibleParty** | [**Organization**](Organization.md) | The city organization responsible for this decision. If decision is delegated, this is the organization that delegated the authority. | [optional] 
**delegatePost** | [**Post**](Post.md) | If this decision was delegated, this field will be filled and refers to the post that made the decision | [optional] 
**contents** | [**[Content]**](Content.md) | contents related to this action | [optional] 
**votes** | [**[VoteEvent]**](VoteEvent.md) | Votes taken during this action. | [optional] 


