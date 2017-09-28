# PaatosApiClient.Action

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **String** | The action&#39;s url | [optional] 
**id** | **Number** | The action&#39;s unique identifier | [optional] 
**dataSource** | **String** | The action&#39;s data source | [optional] 
**contents** | [**[Content]**](Content.md) | Array of contents | [optional] 
**attachments** | [**[Attachment]**](Attachment.md) | Array of attachments | [optional] 
**createdAt** | **Date** | The time at which the resource was created | [optional] 
**modifiedAt** | **Date** | The time at which the resource was last modified | [optional] 
**originId** | **String** | The event&#39;s origin id | [optional] 
**title** | **String** | Title of the action | [optional] 
**ordering** | **Number** | Ordering of this action within a meeting (or possibly arbitrary ordering) | [optional] 
**articleNumber** | **String** | The article number given to this action after decision, will be null before decision | [optional] 
**resolution** | **String** | Action&#39;s resolution | [optional] 
**_case** | **String** | Case url this action is related to | [optional] 
**post** | **String** | Post url | [optional] 
**event** | **String** | Event url this action is related to | [optional] 


