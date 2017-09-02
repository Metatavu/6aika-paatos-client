# 6aikaPaatosClient.ModelCase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | [**CaseTitle**](CaseTitle.md) |  | [optional] 
**summary** | [**CaseSummary**](CaseSummary.md) |  | [optional] 
**attachments** | [**[Attachment]**](Attachment.md) | Attachments related to this case | [optional] 
**category** | **String** | Category this case belongs to (\&quot;tehtäväluokka\&quot;) | [optional] 
**area** | [**[Area]**](Area.md) | Geographic areas this case is related to | [optional] 
**district** | **String** | Name of district (if any), that this issue is related to. | [optional] 
**categoryId** | **String** | Identifier code for the category, if applicable. In finland this could be the national \&quot;Tehtäväluokitus\&quot; | [optional] 
**relatedCases** | [**[CaseRelatedCases]**](CaseRelatedCases.md) | Other cases that are related to this case | [optional] 
**originator** | **String** | Person or organization the proposed this case to the city | [optional] 
**creationDate** | **Date** | Date this case was entered into system | [optional] 
**_public** | **Boolean** | Is this case public? | [optional] 


